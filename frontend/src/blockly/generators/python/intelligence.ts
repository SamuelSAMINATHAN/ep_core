export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

// Map of recognition elements
const RECOGNITION_ELEMENT_MAP: { [key: string]: string } = {
  'markers': 'marker',
  'lines': 'line',
  'claps': 'clap'
};

// Map of colors
const COLOR_MAP: { [key: string]: string } = {
  'red': 'red',
  'blue': 'blue',
  'green': 'green',
  'yellow': 'yellow',
  'orange': 'orange',
  'purple': 'purple',
  'black': 'black',
  'white': 'white'
};

/**
 * Generate Python code for "intelligence_toggle_recognition" block
 * Enables or disables recognition of specific elements
 */
Blockly.Python['intelligence_toggle_recognition'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_vision'] = 'from robomaster import vision';
  
  // Get action and element
  const action: string = block.getFieldValue('ACTION');
  const element: string = block.getFieldValue('ELEMENT');
  const element_name: string = RECOGNITION_ELEMENT_MAP[element] || 'marker';
  
  // Generate code to enable/disable recognition
  let code = 'ep_vision = ep_robot.vision\n';
  
  if (action === 'enable') {
    if (element === 'claps') {
      code += 'ep_robot.sound.enable_sound_recognition()\n';
    } else {
      // For visual elements, use subscription system
      const callback_name = 'on_detect_' + element_name;
      code += 'def ' + callback_name + '(detection_info):\n';
      code += '    # Callback function to process detected data\n';
      code += '    pass\n\n';
      code += 'ep_vision.sub_detect_info(name="' + element_name + '", callback=' + callback_name + ')\n';
    }
  } else { // disable
    if (element === 'claps') {
      code += 'ep_robot.sound.disable_sound_recognition()\n';
    } else {
      code += 'ep_vision.unsub_detect_info(name="' + element_name + '")\n';
    }
  }
  
  return code;
};

/**
 * Generate Python code for "intelligence_set_marker_distance" block
 * Sets maximum detection range for visual markers
 */
Blockly.Python['intelligence_set_marker_distance'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_vision'] = 'from robomaster import vision';
  
  // Get distance
  const distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '2';
  
  // Generate code to configure distance
  return 'ep_vision = ep_robot.vision\n' +
         'ep_vision.set_marker_detection_distance(' + distance + ')\n';
};

/**
 * Generate Python code for "intelligence_set_recognition_color" block
 * Determines which colors will be recognized as line or marker
 */
Blockly.Python['intelligence_set_recognition_color'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_vision'] = 'from robomaster import vision';
  
  // Get color and type
  const color: string = block.getFieldValue('COLOR');
  const type: string = block.getFieldValue('TYPE');
  const color_value: string = COLOR_MAP[color] || 'red';
  
  // Generate code to configure recognition color
  return 'ep_vision = ep_robot.vision\n' +
         'ep_vision.set_detection_color(name="' + type + '", color="' + color_value + '")\n';
};

/**
 * Generate Python code for "intelligence_set_exposure" block
 * Adjusts light sensitivity (useful for line following)
 */
Blockly.Python['intelligence_set_exposure'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get exposure level
  const level: string = block.getFieldValue('LEVEL');
  let exposure_value: number = 0;
  
  // Convert text level to numeric value
  if (level === 'low') {
    exposure_value = -1;
  } else if (level === 'medium') {
    exposure_value = 0;
  } else { // high
    exposure_value = 1;
  }
  
  // Generate code to configure exposure
  return 'ep_camera = ep_robot.camera\n' +
         'ep_camera.set_ev(' + exposure_value + ')\n';
};

/**
 * Generate Python code for "intelligence_identify_and_aim" block
 * Robot detects a visual element and aims its blaster at it
 */
Blockly.Python['intelligence_identify_and_aim'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_vision'] = 'from robomaster import vision';
  
  // Get element to identify
  const element: string = block.getFieldValue('ELEMENT');
  let element_sdk: string = '';
  
  // Convert element to SDK value
  switch(element) {
    case 'marker':
      element_sdk = 'vision.marker';
      break;
    case 'person':
      element_sdk = 'vision.person';
      break;
    case 'line':
      element_sdk = 'vision.line';
      break;
    case 'shape':
      element_sdk = 'vision.marker'; // Use marker for shapes
      break;
    case 'robot':
      element_sdk = 'vision.robot';
      break;
    default:
      element_sdk = 'vision.marker';
  }
  
  // Generate code to identify and aim
  return 'ep_vision = ep_robot.vision\n' +
         'ep_gimbal = ep_robot.gimbal\n' +
         'ep_vision.detect_marker_and_aim(' + element_sdk + ')\n';
};

/**
 * Generate Python code for "intelligence_recognition_event" block
 * Executes a block when an element is detected
 */
Blockly.Python['intelligence_recognition_event'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_vision'] = 'from robomaster import vision';
  Blockly.Python.definitions_['import_time'] = 'import time';
  
  // Get element to detect
  const element: string = block.getFieldValue('ELEMENT');
  let element_sdk: string = '';
  
  // Get statements to execute on detection
  const statements: string = Blockly.Python.statementToCode(block, 'DO');
  
  // Create unique identifier for callback function
  const functionName: string = Blockly.Python.nameDB_.getDistinctName('on_detect_' + element, Blockly.PROCEDURE_CATEGORY_NAME);
  
  let code = '';
  
  // Handle differently based on element
  if (element === 'clap_once' || element === 'clap_twice') {
    Blockly.Python.definitions_['import_media'] = 'from robomaster import media';
    
    // Generate callback function for claps
    code = 'def ' + functionName + '(applause_info):\n' +
           '  detected_type = applause_info\n' +
           '  clap_type = "clap_once" if detected_type == media.clapType.ONCE else "clap_twice"\n' +
           '  if clap_type == "' + element + '":\n' +
           Blockly.Python.prefixLines(statements, '    ') + '\n';
    
    // Add function to beginning of program
    Blockly.Python.definitions_['sound_callback_' + element] = code;
    
    // Return code that subscribes to clap event
    return 'ep_robot.sound.sub_sound_recognized_applause(callback=' + functionName + ')\n';
  } else if (element === 'gesture') {
    // Generate callback function for gestures
    code = 'def ' + functionName + '(gesture_info):\n' +
           Blockly.Python.prefixLines(statements, '  ') + '\n';
    
    // Add function to beginning of program
    Blockly.Python.definitions_['vision_callback_' + element] = code;
    
    // Return code that subscribes to gesture event
    return 'ep_vision = ep_robot.vision\n' +
           'ep_vision.sub_detect_info(name="gesture", callback=' + functionName + ')\n';
  } else {
    // Convert element to SDK value
    switch(element) {
      case 'marker':
        element_sdk = 'marker';
        break;
      case 'person':
        element_sdk = 'person';
        break;
      case 'line':
        element_sdk = 'line';
        break;
      case 'shape':
        element_sdk = 'marker'; // Use marker for shapes
        break;
      case 'robot':
        element_sdk = 'robot';
        break;
      default:
        element_sdk = 'marker';
    }
    
    // Generate callback function
    code = 'def ' + functionName + '(detection_info):\n' +
           '  if len(detection_info) > 0:  # If something is detected\n' +
           Blockly.Python.prefixLines(statements, '    ') + '\n';
    
    // Add function to beginning of program
    Blockly.Python.definitions_['vision_callback_' + element] = code;
    
    // Return code that subscribes to vision event
    return 'ep_vision = ep_robot.vision\n' +
           'ep_vision.sub_detect_info(name="' + element_sdk + '", callback=' + functionName + ')\n';
  }
}; 