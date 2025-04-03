export {};
declare const Blockly: any;

// Bloc chassis_move
Blockly.Blocks['chassis_move'] = {
  init: function() {
    this.appendValueInput('X_SPEED')
        .setCheck('Number')
        .appendField('Déplacer chassis vitesse X');
    this.appendValueInput('Y_SPEED')
        .setCheck('Number')
        .appendField('vitesse Y');
    this.appendValueInput('Z_SPEED')
        .setCheck('Number')
        .appendField('vitesse Z');
    this.appendValueInput('DURATION')
        .setCheck('Number')
        .appendField('durée (s)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplacer le chassis avec les vitesses spécifiées');
  }
};

// Bloc chassis_stop
Blockly.Blocks['chassis_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Arrêter le chassis');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Arrêter tout mouvement du chassis');
  }
};

// Bloc pour régler la vitesse du chassis
Blockly.Blocks['chassis_set_speed'] = {
  init: function() {
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('Régler vitesse chassis');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Régler la vitesse du chassis');
  }
};

// Bloc chassis_set_pwm
Blockly.Blocks['chassis_set_pwm'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('Régler PWM port')
        .appendField(new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6']
        ]), 'PORT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Régler la valeur PWM pour un port spécifique');
  }
};

// Bloc chassis_set_accelerator
Blockly.Blocks['chassis_set_accelerator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['Activer', 'enable'],
          ['Désactiver', 'disable']
        ]), 'ACTION')
        .appendField('accélérateur de chassis');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Active ou désactive l\'accélérateur du chassis');
  }
};

// Bloc chassis_follow_gimbal
Blockly.Blocks['chassis_follow_gimbal'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Suivre la tourelle avec un angle de');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Configure le chassis pour suivre la tourelle');
  }
};

// Bloc chassis_set_translation_speed
Blockly.Blocks['chassis_set_translation_speed'] = {
  init: function() {
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('Configurer vitesse de translation à');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Configure la vitesse de translation du chassis');
  }
};

// Bloc chassis_set_rotation_speed
Blockly.Blocks['chassis_set_rotation_speed'] = {
  init: function() {
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('Configurer vitesse de rotation à');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Configure la vitesse de rotation du chassis');
  }
};

// Bloc chassis_set_wheel_speed
Blockly.Blocks['chassis_set_wheel_speed'] = {
  init: function() {
    this.appendValueInput('FRONT_LEFT')
        .setCheck('Number')
        .appendField('Configurer vitesse roues: avant gauche');
    this.appendValueInput('FRONT_RIGHT')
        .setCheck('Number')
        .appendField('avant droite');
    this.appendValueInput('REAR_LEFT')
        .setCheck('Number')
        .appendField('arrière gauche');
    this.appendValueInput('REAR_RIGHT')
        .setCheck('Number')
        .appendField('arrière droite');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Configure la vitesse de chaque roue indépendamment');
  }
};

// Bloc chassis_translate_direction
Blockly.Blocks['chassis_translate_direction'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Translater le chassis dans la direction');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplace le chassis dans la direction spécifiée (angle en degrés)');
  }
};

// Bloc chassis_translate_direction_duration
Blockly.Blocks['chassis_translate_direction_duration'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Translater le chassis dans la direction');
    this.appendValueInput('DURATION')
        .setCheck('Number')
        .appendField('pendant');
    this.appendDummyInput()
        .appendField('secondes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplace le chassis dans la direction spécifiée pendant une durée donnée');
  }
};

// Bloc chassis_translate_direction_distance
Blockly.Blocks['chassis_translate_direction_distance'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Translater le chassis dans la direction');
    this.appendValueInput('DISTANCE')
        .setCheck('Number')
        .appendField('sur une distance de');
    this.appendDummyInput()
        .appendField('mètres');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplace le chassis dans la direction spécifiée sur une distance donnée');
  }
};

// Bloc chassis_translate_direction_speed
Blockly.Blocks['chassis_translate_direction_speed'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Translater le chassis dans la direction');
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('à la vitesse');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplace le chassis dans la direction spécifiée à la vitesse donnée');
  }
};

// Bloc chassis_translate_xy
Blockly.Blocks['chassis_translate_xy'] = {
  init: function() {
    this.appendValueInput('X_SPEED')
        .setCheck('Number')
        .appendField('Translater le chassis avec vitesse X');
    this.appendValueInput('Y_SPEED')
        .setCheck('Number')
        .appendField('vitesse Y');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Déplace le chassis avec des vitesses X et Y spécifiées');
  }
};

// Bloc chassis_rotate_direction
Blockly.Blocks['chassis_rotate_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Tourner le chassis')
        .appendField(new Blockly.FieldDropdown([
          ['à gauche', 'left'],
          ['à droite', 'right']
        ]), 'DIRECTION');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Fait tourner le chassis dans la direction spécifiée');
  }
};

// Bloc chassis_rotate_direction_duration
Blockly.Blocks['chassis_rotate_direction_duration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Tourner le chassis')
        .appendField(new Blockly.FieldDropdown([
          ['à gauche', 'left'],
          ['à droite', 'right']
        ]), 'DIRECTION');
    this.appendValueInput('DURATION')
        .setCheck('Number')
        .appendField('pendant');
    this.appendDummyInput()
        .appendField('secondes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Fait tourner le chassis dans la direction spécifiée pendant une durée donnée');
  }
};

// Bloc chassis_rotate_direction_angle
Blockly.Blocks['chassis_rotate_direction_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Tourner le chassis')
        .appendField(new Blockly.FieldDropdown([
          ['à gauche', 'left'],
          ['à droite', 'right']
        ]), 'DIRECTION');
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('de');
    this.appendDummyInput()
        .appendField('degrés');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Fait tourner le chassis dans la direction spécifiée d\'un angle donné');
  }
};

// Bloc chassis_rotate_direction_speed
Blockly.Blocks['chassis_rotate_direction_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Tourner le chassis')
        .appendField(new Blockly.FieldDropdown([
          ['à gauche', 'left'],
          ['à droite', 'right']
        ]), 'DIRECTION');
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField('à la vitesse');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Fait tourner le chassis dans la direction spécifiée à la vitesse donnée');
  }
};

// Bloc chassis_move_combined
Blockly.Blocks['chassis_move_combined'] = {
  init: function() {
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField('Déplacer le chassis avec un angle de');
    this.appendDummyInput()
        .appendField('et rotation')
        .appendField(new Blockly.FieldDropdown([
          ['à gauche', 'left'],
          ['à droite', 'right'],
          ['aucune', 'none']
        ]), 'DIRECTION');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Combine translation et rotation du chassis');
  }
};

// Bloc chassis_get_angle
Blockly.Blocks['chassis_get_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Obtenir angle du chassis')
        .appendField(new Blockly.FieldDropdown([
          ['roulis', 'roll'],
          ['tangage', 'pitch'],
          ['lacet', 'yaw']
        ]), 'AXIS');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Récupère l\'angle actuel du chassis selon l\'axe spécifié');
  }
};

// Bloc chassis_get_position
Blockly.Blocks['chassis_get_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Position du chassis')
        .appendField(new Blockly.FieldDropdown([
          ['X', 'x'],
          ['Y', 'y'],
          ['Z', 'z']
        ]), 'COORDINATE');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Récupère la position actuelle du chassis selon l\'axe spécifié');
  }
};

// Bloc chassis_collision_event
Blockly.Blocks['chassis_collision_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Quand une collision est détectée');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('Exécute le code quand une collision est détectée sur le chassis');
  }
};

// Bloc chassis_collision_condition
Blockly.Blocks['chassis_collision_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Collision détectée');
    this.setOutput(true, 'Boolean');
    this.setColour(230);
    this.setTooltip('Vérifie si une collision est détectée sur le chassis');
  }
}; 