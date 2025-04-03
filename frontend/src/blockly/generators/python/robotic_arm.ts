export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

/**
 * Generate Python code for "robotic_gripper_set" block
 * Opens, closes or stops the robotic arm gripper
 */
Blockly.Python['robotic_gripper_set'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get gripper state
  const state: string = block.getFieldValue('STATE');
  let code = '';
  
  // Generate Python code based on requested state
  switch(state) {
    case 'open':
      code = 'ep_arm.open_gripper()\n';
      break;
    case 'close':
      code = 'ep_arm.close_gripper()\n';
      break;
    case 'stop':
      code = 'ep_arm.stop_gripper()\n';
      break;
  }
  
  return code;
};

/**
 * Generate Python code for "robotic_gripper_is_state" block
 * Condition that checks if gripper is fully open or closed
 */
Blockly.Python['robotic_gripper_is_state'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get state to check
  const state: string = block.getFieldValue('STATE');
  let code = '';
  
  // Generate Python code to check state
  if (state === 'open') {
    code = 'ep_arm.is_gripper_fully_open()';
  } else {
    code = 'ep_arm.is_gripper_fully_closed()';
  }
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

/**
 * Generate Python code for "robotic_gripper_closed_status" block
 * Returns 1 if gripper is closed, 0 otherwise
 */
Blockly.Python['robotic_gripper_closed_status'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Generate Python code
  const code = 'ep_arm.get_gripper_status()[1]';
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

/**
 * Generate Python code for "robotic_gripper_open_status" block
 * Returns 1 if gripper is open, 0 otherwise
 */
Blockly.Python['robotic_gripper_open_status'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Generate Python code
  const code = 'ep_arm.get_gripper_status()[0]';
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

/**
 * Generate Python code for "robotic_arm_move_direction" block
 * Moves arm in given direction for specified distance
 */
Blockly.Python['robotic_arm_move_direction'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get direction and distance
  const direction: string = block.getFieldValue('DIRECTION');
  const distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0';
  let code = '';
  
  // Generate Python code based on direction
  switch(direction) {
    case 'forward':
      code = 'ep_arm.move(x=' + distance + ', y=0).wait_for_completed()\n';
      break;
    case 'backward':
      code = 'ep_arm.move(x=-' + distance + ', y=0).wait_for_completed()\n';
      break;
    case 'up':
      code = 'ep_arm.move(x=0, y=' + distance + ').wait_for_completed()\n';
      break;
    case 'down':
      code = 'ep_arm.move(x=0, y=-' + distance + ').wait_for_completed()\n';
      break;
  }
  
  return code;
};

/**
 * Generate Python code for "robotic_arm_move_coordinates" block
 * Moves arm to given absolute position in mm
 */
Blockly.Python['robotic_arm_move_coordinates'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get X and Y coordinates
  const x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC) || '0';
  const y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate Python code to move arm to specified coordinates
  return 'ep_arm.move(x=' + x + ', y=' + y + ').wait_for_completed()\n';
};

/**
 * Generate Python code for "robotic_arm_recenter" block
 * Returns arm to origin position (0,0)
 */
Blockly.Python['robotic_arm_recenter'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Generate Python code to recenter arm
  return 'ep_arm.recenter().wait_for_completed()\n';
};

/**
 * Generate Python code for "robotic_arm_get_position" block
 * Returns current arm position as coordinates (X, Y in mm)
 */
Blockly.Python['robotic_arm_get_position'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Generate Python code to get arm position
  const code = 'ep_arm.get_position()';
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

/**
 * Generate Python code for "robotic_servo_set_angle" block
 * Rotates a servo motor to specified angle
 */
Blockly.Python['robotic_servo_set_angle'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get servo number and angle
  const servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC) || '1';
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate Python code to rotate servo to specified angle
  return 'ep_robot.servo.move_servo(index=' + servo + ', angle=' + angle + ')\n';
};

/**
 * Generate Python code for "robotic_servo_set_action" block
 * Centers servo or stops it
 */
Blockly.Python['robotic_servo_set_action'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get servo number and action
  const servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC) || '1';
  const action: string = block.getFieldValue('ACTION');
  let code = '';
  
  // Generate Python code based on requested action
  if (action === 'center') {
    code = 'ep_robot.servo.move_servo(index=' + servo + ', angle=0)\n';
  } else { // stop
    code = 'ep_robot.servo.stop_servo(index=' + servo + ')\n';
  }
  
  return code;
};

/**
 * Generate Python code for "robotic_servo_set_speed" block
 * Rotates servo at specified speed
 */
Blockly.Python['robotic_servo_set_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get servo number and speed
  const servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC) || '1';
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate Python code to rotate servo at specified speed
  return 'ep_robot.servo.drive_speed(index=' + servo + ', speed=' + speed + ')\n';
};

/**
 * Generate Python code for "robotic_servo_get_angle" block
 * Returns current angle of specified servo
 */
Blockly.Python['robotic_servo_get_angle'] = function(block: any): [string, number] {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get servo number
  const servo = Blockly.Python.valueToCode(block, 'SERVO', Blockly.Python.ORDER_ATOMIC) || '1';
  
  // Generate Python code to get servo angle
  const code = 'ep_robot.servo.get_servo_angle(index=' + servo + ')';
  
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
}; 