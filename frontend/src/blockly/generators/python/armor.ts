import { BlocklyBlock, BlocklyInstance } from '../../types';

export {};

declare const Blockly: BlocklyInstance;

if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible');
} else {
  const Python = Blockly.Python;

  // Map of armor zones to SDK constants
  const ARMOR_ZONE_MAP: { [key: string]: string } = {
    'front': 'armor.ARMOR_FRONT',
    'back': 'armor.ARMOR_BACK',
    'left': 'armor.ARMOR_LEFT',
    'right': 'armor.ARMOR_RIGHT',
    'random': 'armor.ARMOR_ALL' // Used for random events
  };

  /**
   * Generate Python code for "armor_set_sensitivity" block
   * Adjusts armor impact detection sensitivity
   */
  Python['armor_set_sensitivity'] = function(block: BlocklyBlock): string {
    // Add necessary imports
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    Python.definitions_['import_armor'] = 'from robomaster import armor';
    
    // Get sensitivity
    const sensitivity = Python.valueToCode(block, 'SENSITIVITY', Python.ORDER_ATOMIC) || '5';
    
    // Generate code to configure armor sensitivity
    return 'ep_armor.set_hit_sensitivity(comp="all", sensitivity=' + sensitivity + ')\n';
  };

  /**
   * Generate Python code for "armor_hit_event" block
   * Triggers an event when armor is hit
   */
  Python['armor_hit_event'] = function(block: BlocklyBlock): string {
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    return `def on_armor_hit(armor_id, hit_type):\n${branch}\n\nrobot.armor.on_hit = on_armor_hit\n`;
  };

  /**
   * Generate Python code for "armor_last_hit_info" block
   * Returns information about the last armor hit
   */
  Python['armor_last_hit_info'] = function(block: BlocklyBlock): [string, number] {
    const info = block.getFieldValue('INFO');
    let code = '';
    switch (info) {
      case 'POSITION':
        code = 'robot.armor.last_hit_position';
        break;
      case 'TIME':
        code = 'robot.armor.last_hit_time';
        break;
      case 'TYPE':
        code = 'robot.armor.last_hit_type';
        break;
    }
    return [code, Python.ORDER_ATOMIC];
  };

  /**
   * Generate Python code for "armor_is_hit" block
   * Checks if a specific armor has been hit
   */
  Python['armor_is_hit'] = function(block: BlocklyBlock): [string, number] {
    const position = block.getFieldValue('POSITION');
    return [`robot.armor.is_hit("${position}")`, Python.ORDER_FUNCTION_CALL];
  };

  /**
   * Generate Python code for "armor_wait_for_hit" block
   * Waits for a specific armor to be hit
   */
  Python['armor_wait_for_hit'] = function(block: BlocklyBlock): string {
    // Add necessary imports
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    Python.definitions_['import_armor'] = 'from robomaster import armor';
    Python.definitions_['import_time'] = 'import time';
    
    // Get armor zone
    const zone: string = block.getFieldValue('ZONE');
    const armorComp: string = ARMOR_ZONE_MAP[zone] || 'armor.ARMOR_ALL';
    
    // Generate variable to store hit information
    const varName: string = Python.nameDB_.getDistinctName('hit_detected', Python.Variables.NAME_TYPE);
    
    // Generate code to wait for armor hit
    const code = 'def ' + varName + '_callback(sub_info, robot):\n' +
                 '  global ' + varName + '\n' +
                 '  armor_id, hit_type = sub_info\n' +
                 '  if armor_id == ' + armorComp + ' or ' + armorComp + ' == armor.ARMOR_ALL:\n' +
                 '    ' + varName + ' = True\n\n' +
                 varName + ' = False\n' +
                 'ep_armor.sub_hit_event(' + varName + '_callback, ep_robot)\n' +
                 'while not ' + varName + ':\n' +
                 '  time.sleep(0.1)\n' +
                 'ep_armor.unsub_hit_event()\n';
    
    // Add variable to block
    Python.definitions_['var_' + varName] = 'global ' + varName + '\n' + varName + ' = False';
    
    return code;
  };

  /**
   * Generate Python code for "armor_ir_hit_event" block
   * Triggers an event when robot is hit by an infrared beam
   */
  Python['armor_ir_hit_event'] = function(block: BlocklyBlock): string {
    // Add necessary imports
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    Python.definitions_['import_armor'] = 'from robomaster import armor';
    
    // Get statements to execute on IR hit
    const statements: string = Python.statementToCode(block, 'DO');
    
    // Create unique identifier for callback function
    const functionName: string = Python.nameDB_.getDistinctName('on_ir_hit', Python.PROCEDURE_CATEGORY_NAME);
    
    // Generate callback function
    const code = 'def ' + functionName + '(sub_info, ep_robot):\n' +
                 '  hit_cnt = sub_info\n' +
                 Python.prefixLines(statements, '  ') + '\n';
    
    // Add function to beginning of program
    Python.definitions_['armor_ir_hit_callback'] = code;
    
    // Return code that subscribes to IR hit event
    return 'ep_armor.sub_ir_event(' + functionName + ', ep_robot)\n';
  };

  /**
   * Generate Python code for "armor_wait_for_ir_hit" block
   * Waits for robot to be hit by an infrared beam
   */
  Python['armor_wait_for_ir_hit'] = function(block: BlocklyBlock): string {
    // Add necessary imports
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    Python.definitions_['import_armor'] = 'from robomaster import armor';
    Python.definitions_['import_time'] = 'import time';
    
    // Generate variable to store hit information
    const varName: string = Python.nameDB_.getDistinctName('ir_hit_detected', Python.Variables.NAME_TYPE);
    
    // Generate code to wait for IR hit
    const code = 'def ' + varName + '_callback(sub_info, robot):\n' +
                 '  global ' + varName + '\n' +
                 '  ' + varName + ' = True\n\n' +
                 varName + ' = False\n' +
                 'ep_armor.sub_ir_event(' + varName + '_callback, ep_robot)\n' +
                 'while not ' + varName + ':\n' +
                 '  time.sleep(0.1)\n' +
                 'ep_armor.unsub_ir_event()\n';
    
    // Add variable to block
    Python.definitions_['var_' + varName] = 'global ' + varName + '\n' + varName + ' = False';
    
    return code;
  };

  /**
   * Generate Python code for "armor_is_ir_hit" block
   * Checks if robot has been hit by an infrared beam
   */
  Python['armor_is_ir_hit'] = function(block: BlocklyBlock): [string, number] {
    // Add necessary imports
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    
    // We need a global variable to track IR hits
    const varName: string = Python.nameDB_.getDistinctName('ir_hit_status', Python.Variables.NAME_TYPE);
    
    // Add callback function and variables to track IR hits
    Python.definitions_['var_' + varName] = 'global ' + varName + '\n' + varName + ' = False';
    Python.definitions_['armor_ir_hit_status_callback'] = 
        'def ' + varName + '_callback(sub_info, robot):\n' +
        '  global ' + varName + '\n' +
        '  ' + varName + ' = True\n\n' +
        'try:\n' +
        '  ep_armor.sub_ir_event(' + varName + '_callback, ep_robot)\n' +
        'except:\n' +
        '  pass';
    
    // Generate code to check IR hit status
    const code = varName;
    
    return [code, Python.ORDER_ATOMIC];
  };
} 