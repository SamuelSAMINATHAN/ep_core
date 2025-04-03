export {};
declare const Blockly: any;

// Bloc sensor_ir_distance_toggle
Blockly.Blocks['sensor_ir_distance_toggle'] = {
  init: function() {
    this.appendValueInput('SENSOR')
        .setCheck('Number')
        .appendField("Capteur de distance infrarouge")
        .appendField(new Blockly.FieldDropdown([
          ['activer', 'enable'],
          ['désactiver', 'disable']
        ]), 'ACTION')
        .appendField("fonctions de mesures");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFD700');
    this.setTooltip('Active ou désactive les fonctions de mesure d\'un capteur infrarouge spécifique');
    this.setInputsInline(true);
  }
};

// Bloc sensor_ir_distance_event
Blockly.Blocks['sensor_ir_distance_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lorsque la valeur du capteur de distance infrarouge est");
    this.appendValueInput('SENSOR')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['≥', '>='],
          ['≤', '<='],
          ['=', '=='],
          ['>', '>'],
          ['<', '<']
        ]), 'COMPARATOR');
    this.appendValueInput('VALUE')
        .setCheck('Number');
    this.appendDummyInput()
        .appendField("cm");
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setColour('#FFD700');
    this.setTooltip('Déclenche une action lorsque la distance mesurée par un capteur répond à la condition spécifiée');
    this.setInputsInline(true);
  }
};

// Bloc sensor_ir_distance_wait
Blockly.Blocks['sensor_ir_distance_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attendez que la valeur de distance")
        .appendField(new Blockly.FieldDropdown([
          ['≥', '>='],
          ['≤', '<='],
          ['=', '=='],
          ['>', '>'],
          ['<', '<']
        ]), 'COMPARATOR');
    this.appendValueInput('VALUE')
        .setCheck('Number');
    this.appendValueInput('SENSOR')
        .setCheck('Number')
        .appendField("cm du capteur de distance infrarouge");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFD700');
    this.setTooltip('Attend qu\'une condition sur la distance mesurée soit remplie avant de continuer l\'exécution');
    this.setInputsInline(true);
  }
};

// Bloc sensor_ir_distance_condition
Blockly.Blocks['sensor_ir_distance_condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Valeur de distance")
        .appendField(new Blockly.FieldDropdown([
          ['≥', '>='],
          ['≤', '<='],
          ['=', '=='],
          ['>', '>'],
          ['<', '<']
        ]), 'COMPARATOR');
    this.appendValueInput('VALUE')
        .setCheck('Number');
    this.appendValueInput('SENSOR')
        .setCheck('Number')
        .appendField("cm du capteur de distance infrarouge");
    this.setOutput(true, 'Boolean');
    this.setColour('#FFD700');
    this.setTooltip('Vérifie si une condition sur la valeur de distance est vraie');
    this.setInputsInline(true);
  }
};

// Bloc sensor_ir_distance_value
Blockly.Blocks['sensor_ir_distance_value'] = {
  init: function() {
    this.appendValueInput('SENSOR')
        .setCheck('Number')
        .appendField("Capteur de distance infrarouge");
    this.appendDummyInput()
        .appendField("→ valeur de distance");
    this.setOutput(true, 'Number');
    this.setColour('#FFD700');
    this.setTooltip('Retourne la distance mesurée par un capteur donné (en cm)');
    this.setInputsInline(true);
  }
}; 