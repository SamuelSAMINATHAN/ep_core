export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

/**
 * Generate Python code for "chassis_move" block
 * Moves chassis with specified speeds
 */
Blockly.Python['chassis_move'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get speeds and duration
  const x_speed = Blockly.Python.valueToCode(block, 'X_SPEED', Blockly.Python.ORDER_ATOMIC) || '0';
  const y_speed = Blockly.Python.valueToCode(block, 'Y_SPEED', Blockly.Python.ORDER_ATOMIC) || '0';
  const z_speed = Blockly.Python.valueToCode(block, 'Z_SPEED', Blockly.Python.ORDER_ATOMIC) || '0';
  const duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate code to move chassis
  if (parseFloat(duration) > 0) {
    // Use wait_for_completed to wait for movement to finish if duration specified
    return 'ep_chassis = ep_robot.chassis\n' +
           'ep_chassis.move(x=' + x_speed + ', y=' + y_speed + ', z=' + z_speed + ', xy_speed=0.7, z_speed=30).wait_for_completed(timeout=' + duration + ')\n';
  } else {
    // Start movement without waiting if no duration specified
    return 'ep_chassis = ep_robot.chassis\n' +
           'ep_chassis.drive_speed(x=' + x_speed + ', y=' + y_speed + ', z=' + z_speed + ')\n';
  }
};

/**
 * Generate Python code for "chassis_stop" block
 * Stops all chassis movement
 */
Blockly.Python['chassis_stop'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Generate code to stop chassis
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.drive_speed(x=0, y=0, z=0)\n';
};

/**
 * Generate Python code for "chassis_set_speed" block
 * Sets chassis speed
 */
Blockly.Python['chassis_set_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get speed
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0.5';
  
  // Generate code to set speed
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.set_speed(x=' + speed + ')\n';
};

/**
 * Generate Python code for "chassis_set_pwm" block
 * Sets PWM value for specific port
 */
Blockly.Python['chassis_set_pwm'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get port and value
  const port: string = block.getFieldValue('PORT');
  const value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate code to set PWM value
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.set_pwm_value(pwm' + port + '=' + value + ')\n';
};

/**
 * Generate Python code for "chassis_set_accelerator" block
 * Enables or disables chassis accelerator
 */
Blockly.Python['chassis_set_accelerator'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get action (enable/disable)
  const action: string = block.getFieldValue('ACTION');
  const state: string = (action === 'enable') ? 'True' : 'False';
  
  // Generate code to enable/disable accelerator
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.set_accelerometer_sensitivity(enable=' + state + ')\n';
};

/**
 * Generate Python code for "chassis_follow_gimbal" block
 * Configures chassis to follow gimbal
 */
Blockly.Python['chassis_follow_gimbal'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get angle
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate code to follow gimbal
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.follow_gimbal(angle=' + angle + ')\n';
};

/**
 * Generate Python code for "chassis_set_translation_speed" block
 * Configures chassis translation speed
 */
Blockly.Python['chassis_set_translation_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get speed
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0.5';
  
  // Generate code to configure translation speed
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.set_speed(xy_speed=' + speed + ')\n';
};

/**
 * Generate Python code for "chassis_set_rotation_speed" block
 * Configures chassis rotation speed
 */
Blockly.Python['chassis_set_rotation_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get speed
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '30';
  
  // Generate code to configure rotation speed
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.set_speed(z_speed=' + speed + ')\n';
};

/**
 * Generate Python code for "chassis_set_wheel_speed" block
 * Configures speed of each wheel independently
 */
Blockly.Python['chassis_set_wheel_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_time'] = 'import time';
  
  // Get wheel speeds
  const front_left = Blockly.Python.valueToCode(block, 'FRONT_LEFT', Blockly.Python.ORDER_ATOMIC) || '0';
  const front_right = Blockly.Python.valueToCode(block, 'FRONT_RIGHT', Blockly.Python.ORDER_ATOMIC) || '0';
  const rear_left = Blockly.Python.valueToCode(block, 'REAR_LEFT', Blockly.Python.ORDER_ATOMIC) || '0';
  const rear_right = Blockly.Python.valueToCode(block, 'REAR_RIGHT', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate code to configure wheel speeds
  return 'ep_chassis = ep_robot.chassis\n' +
         'ep_chassis.drive_wheels(w1=' + front_right + ', w2=' + front_left + ', w3=' + rear_left + ', w4=' + rear_right + ')\n';
};

/**
 * Generate Python code for "chassis_translate_direction" block
 * Moves chassis in specified direction
 */
Blockly.Python['chassis_translate_direction'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_math'] = 'import math';
  
  // Get angle
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Generate code to move chassis in specified direction
  // Convert angle to x and y components for movement
  const code = 'ep_chassis = ep_robot.chassis\n' +
               'angle_rad = math.radians(' + angle + ')\n' +
               'x_speed = math.cos(angle_rad)\n' +
               'y_speed = math.sin(angle_rad)\n' +
               'ep_chassis.drive_speed(x=x_speed, y=y_speed, z=0)\n';
  
  return code;
};

/**
 * Generate Python code for "chassis_translate_direction_duration" block
 * Moves chassis in specified direction for given duration
 */
Blockly.Python['chassis_translate_direction_duration'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_math'] = 'import math';
  Blockly.Python.definitions_['import_time'] = 'import time';
  
  // Get angle and duration
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  const duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC) || '1';
  
  // Generate code to move chassis in specified direction for given duration
  const code = 'ep_chassis = ep_robot.chassis\n' +
               'angle_rad = math.radians(' + angle + ')\n' +
               'x_speed = math.cos(angle_rad)\n' +
               'y_speed = math.sin(angle_rad)\n' +
               'ep_chassis.drive_speed(x=x_speed, y=y_speed, z=0)\n' +
               'time.sleep(' + duration + ')\n' +
               'ep_chassis.drive_speed(x=0, y=0, z=0)\n';
  
  return code;
};

/**
 * Generate Python code for "chassis_translate_direction_distance" block
 * Moves chassis in specified direction for given distance
 */
Blockly.Python['chassis_translate_direction_distance'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_math'] = 'import math';
  
  // Get angle and distance
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  const distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0.5';
  
  // Generate code to move chassis in specified direction for given distance
  const code = 'ep_chassis = ep_robot.chassis\n' +
               'angle_rad = math.radians(' + angle + ')\n' +
               'x_dist = ' + distance + ' * math.cos(angle_rad)\n' +
               'y_dist = ' + distance + ' * math.sin(angle_rad)\n' +
               'ep_chassis.move(x=x_dist, y=y_dist, z=0).wait_for_completed()\n';
  
  return code;
};

/**
 * Generate Python code for "chassis_translate_direction_speed" block
 * Moves chassis in specified direction at given speed
 */
Blockly.Python['chassis_translate_direction_speed'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_math'] = 'import math';
  
  // Get angle and speed
  const angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0';
  const speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0.5';
  
  // Generate code to move chassis in specified direction at given speed
  const code = 'ep_chassis = ep_robot.chassis\n' +
               'angle_rad = math.radians(' + angle + ')\n' +
               'x_speed = ' + speed + ' * math.cos(angle_rad)\n' +
               'y_speed = ' + speed + ' * math.sin(angle_rad)\n' +
               'ep_chassis.drive_speed(x=x_speed, y=y_speed, z=0)\n';
  
  return code;
}; 