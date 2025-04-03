export {};
declare const Blockly: any;

// Bloc robotic_gripper_set
Blockly.Blocks['robotic_gripper_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Régler la pince sur")
        .appendField(new Blockly.FieldDropdown([
          ['ouvert', 'open'],
          ['fermé', 'close'],
          ['arrêt', 'stop']
        ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Ouvre, ferme ou arrête la pince');
  }
};

// Bloc robotic_gripper_is_state
Blockly.Blocks['robotic_gripper_is_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pince complètement")
        .appendField(new Blockly.FieldDropdown([
          ['ouverte', 'open'],
          ['fermée', 'closed']
        ]), 'STATE');
    this.setOutput(true, 'Boolean');
    this.setColour('#E066FF');
    this.setTooltip('Condition qui retourne vrai si la pince est complètement ouverte ou fermée');
  }
};

// Bloc robotic_gripper_closed_status
Blockly.Blocks['robotic_gripper_closed_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Statut fermé de la pince");
    this.setOutput(true, 'Number');
    this.setColour('#E066FF');
    this.setTooltip('Retourne 1 si la pince est fermée, 0 sinon');
  }
};

// Bloc robotic_gripper_open_status
Blockly.Blocks['robotic_gripper_open_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Statut d'ouverture de la pince");
    this.setOutput(true, 'Number');
    this.setColour('#E066FF');
    this.setTooltip('Retourne 1 si la pince est ouverte, 0 sinon');
  }
};

// Bloc robotic_arm_move_direction
Blockly.Blocks['robotic_arm_move_direction'] = {
  init: function() {
    this.appendValueInput('DISTANCE')
        .setCheck('Number')
        .appendField("Configurer le bras robotique pour bouger vers")
        .appendField(new Blockly.FieldDropdown([
          ['avant', 'forward'],
          ['arrière', 'backward'],
          ['haut', 'up'],
          ['bas', 'down']
        ]), 'DIRECTION')
        .appendField("de");
    this.appendDummyInput()
        .appendField("mm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Déplace le bras dans une direction donnée sur une distance définie');
    this.setInputsInline(true);
  }
};

// Bloc robotic_arm_move_coordinates
Blockly.Blocks['robotic_arm_move_coordinates'] = {
  init: function() {
    this.appendValueInput('X')
        .setCheck('Number')
        .appendField("Configurer le bras robotique pour bouger vers les coordonnées (X");
    this.appendValueInput('Y')
        .setCheck('Number')
        .appendField(", Y");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Déplace le bras vers une position absolue donnée en mm');
    this.setInputsInline(true);
  }
};

// Bloc robotic_arm_recenter
Blockly.Blocks['robotic_arm_recenter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recentrer le bras robotique");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Ramène le bras à sa position d\'origine (0,0)');
  }
};

// Bloc robotic_arm_get_position
Blockly.Blocks['robotic_arm_get_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position actuelle du bras robotique");
    this.setOutput(true, 'Array');
    this.setColour('#E066FF');
    this.setTooltip('Donne la position actuelle du bras sous forme de coordonnées (X, Y en mm)');
  }
};

// Bloc robotic_servo_set_angle
Blockly.Blocks['robotic_servo_set_angle'] = {
  init: function() {
    this.appendValueInput('SERVO')
        .setCheck('Number')
        .appendField("Configurer servo");
    this.appendValueInput('ANGLE')
        .setCheck('Number')
        .appendField("pour tourner à");
    this.appendDummyInput()
        .appendField("°");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Tourne un servo moteur à un angle défini. Valeurs positives : horaire, négatives : antihoraire');
    this.setInputsInline(true);
  }
};

// Bloc robotic_servo_set_action
Blockly.Blocks['robotic_servo_set_action'] = {
  init: function() {
    this.appendValueInput('SERVO')
        .setCheck('Number')
        .appendField("Définir servo");
    this.appendDummyInput()
        .appendField("à")
        .appendField(new Blockly.FieldDropdown([
          ['Recentrer', 'center'],
          ['Arrêter', 'stop']
        ]), 'ACTION');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Recentre le servo ou l\'arrête');
    this.setInputsInline(true);
  }
};

// Bloc robotic_servo_set_speed
Blockly.Blocks['robotic_servo_set_speed'] = {
  init: function() {
    this.appendValueInput('SERVO')
        .setCheck('Number')
        .appendField("Configurer servo");
    this.appendValueInput('SPEED')
        .setCheck('Number')
        .appendField("pour tourner à");
    this.appendDummyInput()
        .appendField("°/s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E066FF');
    this.setTooltip('Tourne le servo à une vitesse définie. Positif = horaire, négatif = antihoraire');
    this.setInputsInline(true);
  }
};

// Bloc robotic_servo_get_angle
Blockly.Blocks['robotic_servo_get_angle'] = {
  init: function() {
    this.appendValueInput('SERVO')
        .setCheck('Number')
        .appendField("Angle servo");
    this.setOutput(true, 'Number');
    this.setColour('#E066FF');
    this.setTooltip('Retourne l\'angle actuel du servo spécifié');
    this.setInputsInline(true);
  }
}; 