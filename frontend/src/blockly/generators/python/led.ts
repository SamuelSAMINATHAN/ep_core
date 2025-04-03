export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

// Map of LED effects from French to SDK constants
const LED_EFFECT_MAP: { [key: string]: string } = {
  'on': 'led.EFFECT_ON',
  'off': 'led.EFFECT_OFF',
  'blink_slow': 'led.EFFECT_BLINK',
  'blink_fast': 'led.EFFECT_FLASH'
};

// Map of chassis LED zones to SDK constants
const CHASSIS_LED_MAP: { [key: string]: string } = {
  'front_left': 'led.COMP_FRONT_LEFT',
  'front_right': 'led.COMP_FRONT_RIGHT',
  'rear_left': 'led.COMP_REAR_LEFT',
  'rear_right': 'led.COMP_REAR_RIGHT',
  'chassis_all': 'led.COMP_BOTTOM_ALL'
};

// Map of gimbal LED zones to SDK constants
const GIMBAL_LED_MAP: { [key: string]: string } = {
  'left': 'led.COMP_TOP_LEFT',
  'right': 'led.COMP_TOP_RIGHT',
  'all': 'led.COMP_TOP_ALL'
};

// Map of general LED zones to SDK constants
const GENERAL_LED_MAP: { [key: string]: string } = {
  'all': 'led.COMP_ALL',
  'chassis': 'led.COMP_BOTTOM_ALL',
  'gimbal': 'led.COMP_TOP_ALL'
};

/**
 * Generate Python code for "led_set_flash_frequency" block
 * Configures LED flash frequency
 */
Blockly.Python['led_set_flash_frequency'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_led'] = 'from robomaster import led';
  
  // Get LED zone
  const zone: string = block.getFieldValue('ZONE');
  const component: string = GENERAL_LED_MAP[zone] || 'led.COMP_ALL';
  
  // Get frequency
  const frequency = Blockly.Python.valueToCode(block, 'FREQUENCY', Blockly.Python.ORDER_ATOMIC) || '2';
  
  // Generate code to configure frequency
  return 'ep_led.set_flash_frequency(' + frequency + ')\n';
};

/**
 * Generate Python code for "led_set_chassis_color" block
 * Sets RGB color and behavior for chassis LEDs
 */
Blockly.Python['led_set_chassis_color'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_led'] = 'from robomaster import led';
  
  // Get chassis LED zone
  const zone: string = block.getFieldValue('ZONE');
  const component: string = CHASSIS_LED_MAP[zone] || 'led.COMP_BOTTOM_ALL';
  
  // Get RGB values
  const r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC) || '0';
  const g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC) || '0';
  const b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Get behavior
  const behavior: string = block.getFieldValue('BEHAVIOR');
  const effect: string = LED_EFFECT_MAP[behavior] || 'led.EFFECT_ON';
  
  // Generate code to set color
  return 'ep_led.set_led(comp=' + component + ', r=' + r + ', g=' + g + ', b=' + b + ', effect=' + effect + ')\n';
};

/**
 * Generate Python code for "led_set_gimbal_color" block
 * Sets RGB color and behavior for gimbal LEDs
 */
Blockly.Python['led_set_gimbal_color'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_led'] = 'from robomaster import led';
  
  // Get gimbal LED zone
  const zone: string = block.getFieldValue('ZONE');
  const component: string = GIMBAL_LED_MAP[zone] || 'led.COMP_TOP_ALL';
  
  // Get RGB values
  const r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC) || '0';
  const g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC) || '0';
  const b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Get behavior
  const behavior: string = block.getFieldValue('BEHAVIOR');
  const effect: string = LED_EFFECT_MAP[behavior] || 'led.EFFECT_ON';
  
  // Generate code to set color
  return 'ep_led.set_led(comp=' + component + ', r=' + r + ', g=' + g + ', b=' + b + ', effect=' + effect + ')\n';
};

/**
 * Generate Python code for "led_set_gimbal_sequence" block
 * Configures a predefined sequence for gimbal LEDs
 */
Blockly.Python['led_set_gimbal_sequence'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_led'] = 'from robomaster import led';
  
  // Get gimbal LED zone
  const zone: string = block.getFieldValue('ZONE');
  const component: string = GIMBAL_LED_MAP[zone] || 'led.COMP_TOP_ALL';
  
  // Get sequence
  const sequence = Blockly.Python.valueToCode(block, 'SEQUENCE', Blockly.Python.ORDER_ATOMIC) || '0';
  
  // Get behavior
  const behavior: string = block.getFieldValue('BEHAVIOR');
  const effect: string = LED_EFFECT_MAP[behavior] || 'led.EFFECT_ON';
  
  // For sequences, we use random colors since the API doesn't seem to have a specific method for sequences
  // But we keep the sequence number as seed
  return 'ep_led.set_led(comp=' + component + ', r=(((' + sequence + ' * 13) % 255) + 50) % 255, g=(((' + sequence + ' * 31) % 255) + 50) % 255, b=(((' + sequence + ' * 71) % 255) + 50) % 255, effect=' + effect + ')\n';
};

/**
 * Generate Python code for "led_turn_off" block
 * Turns off specified LEDs
 */
Blockly.Python['led_turn_off'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  Blockly.Python.definitions_['import_led'] = 'from robomaster import led';
  
  // Get LED zone
  const zone: string = block.getFieldValue('ZONE');
  const component: string = GENERAL_LED_MAP[zone] || 'led.COMP_ALL';
  
  // Generate code to turn off LEDs
  return 'ep_led.set_led(comp=' + component + ', r=0, g=0, b=0, effect=led.EFFECT_OFF)\n';
};

/**
 * Generate Python code for "led_set_sight" block
 * Turns gimbal sight light on or off
 */
Blockly.Python['led_set_sight'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get state (on/off)
  const state: string = block.getFieldValue('STATE');
  const stateValue: string = (state === 'on') ? 'True' : 'False';
  
  // Generate code to turn sight light on/off
  return 'ep_robot.gimbal.set_led_status(sight=' + stateValue + ')\n';
}; 