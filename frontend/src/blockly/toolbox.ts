export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Mouvement',
      colour: '#5CA65C',
      contents: [
        { kind: 'block', type: 'move_forward' },
        { kind: 'block', type: 'move_backward' },
        { kind: 'block', type: 'turn_right' },
        { kind: 'block', type: 'turn_left' },
        { kind: 'block', type: 'stop' }
      ]
    },
    {
      kind: 'category',
      name: 'Chassis',
      colour: '#70A65C',
      contents: [
        { kind: 'block', type: 'chassis_move' },
        { kind: 'block', type: 'chassis_stop' },
        { kind: 'block', type: 'chassis_set_speed' }
      ]
    },
    {
      kind: 'category',
      name: 'LED',
      colour: '#33CC33',
      contents: [
        { kind: 'block', type: 'led_set_chassis_color' },
        { kind: 'block', type: 'led_turn_off' }
      ]
    },
    {
      kind: 'category',
      name: 'Armure',
      colour: '#DC143C',
      contents: [
        { kind: 'block', type: 'armor_hit_event' },
        { kind: 'block', type: 'armor_last_hit_info' },
        { kind: 'block', type: 'armor_is_hit' },
        { kind: 'block', type: 'armor_set_sensitivity' },
        { kind: 'block', type: 'armor_wait_for_hit' },
        { kind: 'block', type: 'armor_ir_hit_event' },
        { kind: 'block', type: 'armor_wait_for_ir_hit' },
        { kind: 'block', type: 'armor_is_ir_hit' }
      ]
    },
    {
      kind: 'category',
      name: 'Caméra',
      colour: '#5C81A6',
      contents: [
        { kind: 'block', type: 'camera_start' },
        { kind: 'block', type: 'camera_stop' }
      ]
    },
    {
      kind: 'category',
      name: 'Tourelle',
      colour: '#9400D3',
      contents: [
        { kind: 'block', type: 'gimbal_move' },
        { kind: 'block', type: 'gimbal_stop' }
      ]
    },
    {
      kind: 'category',
      name: 'Bras Robotique',
      colour: '#E066FF',
      contents: [
        { kind: 'block', type: 'robotic_gripper_set' },
        { kind: 'block', type: 'robotic_gripper_is_state' },
        { kind: 'block', type: 'robotic_arm_move_direction' },
        { kind: 'block', type: 'robotic_arm_get_position' },
        { kind: 'block', type: 'robotic_arm_move_coordinates' },
        { kind: 'block', type: 'robotic_arm_recenter' },
        { kind: 'block', type: 'robotic_servo_set_angle' },
        { kind: 'block', type: 'robotic_servo_set_action' },
        { kind: 'block', type: 'robotic_servo_set_speed' },
        { kind: 'block', type: 'robotic_servo_get_angle' }
      ]
    },
    {
      kind: 'category',
      name: 'Capteurs',
      colour: '#FFD700',
      contents: [
        { kind: 'block', type: 'sensor_ir_distance_value' },
        { kind: 'block', type: 'sensor_ir_distance_toggle' },
        { kind: 'block', type: 'sensor_ir_distance_event' },
        { kind: 'block', type: 'sensor_ir_distance_wait' },
        { kind: 'block', type: 'sensor_ir_distance_condition' }
      ]
    },
    {
      kind: 'category',
      name: 'Intelligence',
      colour: '#800080',
      contents: [
        { kind: 'block', type: 'intelligence_toggle_recognition' },
        { kind: 'block', type: 'intelligence_set_marker_distance' },
        { kind: 'block', type: 'intelligence_set_recognition_color' },
        { kind: 'block', type: 'intelligence_set_exposure' },
        { kind: 'block', type: 'intelligence_identify_and_aim' },
        { kind: 'block', type: 'intelligence_recognition_event' },
        { kind: 'block', type: 'intelligence_is_recognized' },
        { kind: 'block', type: 'intelligence_wait_for_recognition' },
        { kind: 'block', type: 'intelligence_marker_info' },
        { kind: 'block', type: 'intelligence_object_info' },
        { kind: 'block', type: 'intelligence_gesture_info' },
        { kind: 'block', type: 'intelligence_line_info' },
        { kind: 'block', type: 'intelligence_lines_info' },
        { kind: 'block', type: 'intelligence_brightness' },
        { kind: 'block', type: 'intelligence_aim_position' }
      ]
    },
    {
      kind: 'category',
      name: 'Multimédia',
      colour: '#FF4500',
      contents: [
        { kind: 'block', type: 'multimedia_play_sound' },
        { kind: 'block', type: 'multimedia_take_photo' },
        { kind: 'block', type: 'multimedia_play_sound_blocking' },
        { kind: 'block', type: 'multimedia_play_custom_audio' },
        { kind: 'block', type: 'multimedia_play_custom_audio_blocking' },
        { kind: 'block', type: 'multimedia_record_video' }
      ]
    },
    {
      kind: 'category',
      name: 'Commandes',
      colour: '#CC3380',
      contents: [
        { kind: 'block', type: 'command_wait' },
        { kind: 'block', type: 'command_forever' }
      ]
    },
    {
      kind: 'category',
      name: 'Logique',
      colour: '#5B80A5',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_ifelse' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_boolean' }
      ]
    },
    {
      kind: 'category',
      name: 'Boucles',
      colour: '#5BA55B',
      contents: [
        { kind: 'block', type: 'controls_repeat_ext' },
        { kind: 'block', type: 'controls_whileUntil' },
        { kind: 'block', type: 'controls_for' }
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '#5B67A5',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' }
      ]
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      colour: '%{BKY_VARIABLES_HUE}'
    }
  ]
}; 