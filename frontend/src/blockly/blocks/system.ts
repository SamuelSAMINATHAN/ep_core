export {};
declare const Blockly: any;

// Bloc system_set_movement_mode
Blockly.Blocks['system_set_movement_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Définir le mode de déplacement à")
        .appendField(new Blockly.FieldDropdown([
          ['châssis directeur', 'chassis_lead'],
          ['tourelle directrice', 'gimbal_lead'],
          ['libre', 'free']
        ]), 'MODE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#008080');
    this.setTooltip('Définit le mode de déplacement du robot');
  }
};

// Bloc system_timer_control
Blockly.Blocks['system_timer_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['lancer', 'start'],
          ['suspendre', 'pause'],
          ['arrêter', 'stop']
        ]), 'ACTION')
        .appendField("le chrono");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#008080');
    this.setTooltip('Contrôle le chronomètre interne');
  }
};

// Bloc system_set_camera_zoom
Blockly.Blocks['system_set_camera_zoom'] = {
  init: function() {
    this.appendValueInput('ZOOM_LEVEL')
        .setCheck('Number')
        .appendField("Régler le zoom de la caméra à");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#008080');
    this.setTooltip('Règle le niveau de zoom de la caméra (1-5)');
  }
};

// Bloc system_get_timer_duration
Blockly.Blocks['system_get_timer_duration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Durée du chrono");
    this.setOutput(true, 'Number');
    this.setColour('#008080');
    this.setTooltip('Retourne la durée écoulée du chronomètre en secondes');
  }
};

// Bloc system_get_program_runtime
Blockly.Blocks['system_get_program_runtime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temps d'exécution du programme");
    this.setOutput(true, 'Number');
    this.setColour('#008080');
    this.setTooltip('Retourne la durée totale d\'exécution du programme en secondes');
  }
};

// Bloc system_get_time_info
Blockly.Blocks['system_get_time_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['année', 'year'],
          ['mois', 'month'],
          ['jour', 'day'],
          ['heure', 'hour'],
          ['minute', 'minute'],
          ['seconde', 'second']
        ]), 'TIME_UNIT')
        .appendField("en cours");
    this.setOutput(true, 'Number');
    this.setColour('#008080');
    this.setTooltip('Retourne l\'information temporelle actuelle (année, mois, jour, etc.)');
  }
};

// Bloc system_get_timestamp
Blockly.Blocks['system_get_timestamp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Horodatage actuel");
    this.setOutput(true, 'Number');
    this.setColour('#008080');
    this.setTooltip('Retourne l\'horodatage actuel depuis l\'activation du robot');
  }
};

// Bloc system_get_battery_level
Blockly.Blocks['system_get_battery_level'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Batterie restante");
    this.setOutput(true, 'Number');
    this.setColour('#008080');
    this.setTooltip('Retourne le niveau de batterie actuel en pourcentage');
  }
}; 