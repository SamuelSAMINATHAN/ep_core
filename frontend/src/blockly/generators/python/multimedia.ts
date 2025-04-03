export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
}

// Map of sound effects from French to SDK constants
const SOUND_EFFECT_MAP: { [key: string]: string } = {
  'greet': 'robot.SOUND_ID_HELLO',
  'attack': 'robot.SOUND_ID_ATTACK',
  'damage': 'robot.SOUND_ID_DAMAGE',
  'defeat': 'robot.SOUND_ID_DEATH',
  'victory': 'robot.SOUND_ID_VICTORY',
  'surprise': 'robot.SOUND_ID_SCANNING',
  'alert': 'robot.SOUND_ID_RECOGNIZED'
};

/**
 * Generate Python code for "multimedia_play_sound" block
 * Plays a predefined sound effect (non-blocking)
 */
Blockly.Python['multimedia_play_sound'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get selected sound effect
  const soundEffect: string = block.getFieldValue('SOUND_EFFECT');
  const soundConstant: string = SOUND_EFFECT_MAP[soundEffect] || 'robot.SOUND_ID_ATTACK';
  
  // Generate code to play sound (non-blocking)
  return 'ep_robot.play_sound(' + soundConstant + ')\n';
};

/**
 * Generate Python code for "multimedia_play_sound_blocking" block
 * Plays a predefined sound effect and waits for completion
 */
Blockly.Python['multimedia_play_sound_blocking'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_robot'] = 'from robomaster import robot';
  
  // Get selected sound effect
  const soundEffect: string = block.getFieldValue('SOUND_EFFECT');
  const soundConstant: string = SOUND_EFFECT_MAP[soundEffect] || 'robot.SOUND_ID_ATTACK';
  
  // Generate code to play sound (blocking)
  return 'ep_robot.play_sound(' + soundConstant + ').wait_for_completed()\n';
};

/**
 * Generate Python code for "multimedia_play_custom_audio" block
 * Plays a custom audio file (non-blocking)
 */
Blockly.Python['multimedia_play_custom_audio'] = function(block: any): string {
  // Get audio filename
  const audioFile: string = block.getFieldValue('AUDIO_FILE');
  
  // Generate code to play audio file (non-blocking)
  return 'ep_robot.play_audio(filename="' + audioFile + '")\n';
};

/**
 * Generate Python code for "multimedia_play_custom_audio_blocking" block
 * Plays a custom audio file and waits for completion
 */
Blockly.Python['multimedia_play_custom_audio_blocking'] = function(block: any): string {
  // Get audio filename
  const audioFile: string = block.getFieldValue('AUDIO_FILE');
  
  // Generate code to play audio file (blocking)
  return 'ep_robot.play_audio(filename="' + audioFile + '").wait_for_completed()\n';
};

/**
 * Generate Python code for "multimedia_take_photo" block
 * Takes a photo with the camera
 */
Blockly.Python['multimedia_take_photo'] = function(block: any): string {
  // Using a method deduced from SDK as it's not explicitly shown in examples
  return 'ep_robot.camera.take_photo()\n';
};

/**
 * Generate Python code for "multimedia_record_video" block
 * Starts or stops video recording
 */
Blockly.Python['multimedia_record_video'] = function(block: any): string {
  // Add necessary imports
  Blockly.Python.definitions_['import_camera'] = 'from robomaster import camera';
  
  // Get action (start or stop)
  const action: string = block.getFieldValue('ACTION');
  
  // Generate code based on action
  if (action === 'start') {
    return 'ep_robot.camera.start_video_stream(display=True, resolution=camera.STREAM_360P)\n';
  } else {
    return 'ep_robot.camera.stop_video_stream()\n';
  }
}; 