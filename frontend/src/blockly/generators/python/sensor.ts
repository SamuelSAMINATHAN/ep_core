export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

/**
 * Generate Python code for "sensor_ir_distance_toggle" block
 * Enables or disables measurement functions of an infrared sensor
 */
Blockly.Python['sensor_ir_distance_toggle'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get sensor number and action
  const sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC) || '1';
  const action: string = block.getFieldValue('ACTION');
  
  // Generate Python code to enable/disable sensor
  let code = '';
  if (action === 'enable') {
    code = 'ep_sensor = ep_robot.sensor\n' +
           'ep_sensor.enable_distance_sub(' + sensor + ')\n';
  } else { // disable
    code = 'ep_sensor = ep_robot.sensor\n' +
           'ep_sensor.disable_distance_sub(' + sensor + ')\n';
  }
  
  return code;
};

/**
 * Generate Python code for "sensor_ir_distance_event" block
 * Triggers an action when measured distance meets a condition
 */
Blockly.Python['sensor_ir_distance_event'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_time'] = 'import time';
  
  // Get sensor number, condition and value
  const sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC) || '1';
  const comparator: string = block.getFieldValue('COMPARATOR');
  const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '10';
  
  // Get statements to execute when condition is met
  const statements: string = Blockly.Python.statementToCode(block, 'DO');
  
  // Create unique identifier for callback function
  const functionName: string = Blockly.Python.nameDB_.getDistinctName('on_ir_distance', Blockly.PROCEDURE_CATEGORY_NAME);
  
  // Generate callback function
  const code = 'def ' + functionName + '(sub_info):\n' +
               '  distances = sub_info\n' +
               '  sensor_index = int(' + sensor + ') - 1\n' +
               '  if sensor_index >= 0 and sensor_index < len(distances) and distances[sensor_index] ' + comparator + ' ' + value + ':\n' +
               Blockly.Python.prefixLines(statements, '    ') + '\n';
  
  // Add function to beginning of program
  Blockly.Python.definitions_['sensor_ir_distance_callback_' + sensor] = code;
  
  // Return code that subscribes to distance event
  return 'ep_sensor = ep_robot.sensor\n' +
         'ep_sensor.sub_distance(freq=10, callback=' + functionName + ')\n';
};

/**
 * Generate Python code for "sensor_ir_distance_wait" block
 * Waits until a condition on measured distance is met
 */
Blockly.Python['sensor_ir_distance_wait'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_time'] = 'import time';
  
  // Get condition, value and sensor number
  const comparator: string = block.getFieldValue('COMPARATOR');
  const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '10';
  const sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC) || '1';
  
  // Generate variable to signal condition is satisfied
  const varName: string = Blockly.Python.nameDB_.getDistinctName('condition_satisfied', Blockly.Variables.NAME_TYPE);
  
  // Generate code to wait until condition is satisfied
  const code = 'def ' + varName + '_callback(sub_info):\n' +
               '  global ' + varName + '\n' +
               '  distances = sub_info\n' +
               '  sensor_index = int(' + sensor + ') - 1\n' +
               '  if sensor_index >= 0 and sensor_index < len(distances) and distances[sensor_index] ' + comparator + ' ' + value + ':\n' +
               '    ' + varName + ' = True\n\n' +
               varName + ' = False\n' +
               'ep_sensor = ep_robot.sensor\n' +
               'ep_sensor.sub_distance(freq=10, callback=' + varName + '_callback)\n' +
               'while not ' + varName + ':\n' +
               '  time.sleep(0.1)\n' +
               'ep_sensor.unsub_distance()\n';
  
  // Add variable to block
  Blockly.Python.definitions_['var_' + varName] = 'global ' + varName + '\n' + varName + ' = False';
  
  return code;
};

/**
 * Generate Python code for "sensor_ir_distance_condition" block
 * Checks if a condition on distance value is true
 */
Blockly.Python['sensor_ir_distance_condition'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get condition, value and sensor number
  const comparator: string = block.getFieldValue('COMPARATOR');
  const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '10';
  const sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC) || '1';
  
  // Generate Python code to check condition
  const code = 'sensor_index = int(' + sensor + ') - 1\n' +
               'distances = ep_robot.sensor.get_distance()\n' +
               'sensor_index >= 0 and sensor_index < len(distances) and distances[sensor_index] ' + comparator + ' ' + value;
  
  return [code, Blockly.Python.ORDER_LOGICAL_AND];
};

/**
 * Generate Python code for "sensor_ir_distance_value" block
 * Returns distance measured by a given sensor
 */
Blockly.Python['sensor_ir_distance_value'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get sensor number
  const sensor = Blockly.Python.valueToCode(block, 'SENSOR', Blockly.Python.ORDER_ATOMIC) || '1';
  
  // Generate Python code to get distance value
  const code = 'ep_robot.sensor.get_distance()[int(' + sensor + ') - 1]';
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
}; 