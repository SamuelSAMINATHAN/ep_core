export {};

declare const Blockly: any;

// Bloc pour avancer
Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendValueInput("DISTANCE")
        .setCheck("Number")
        .appendField("Avancer de");
    this.appendDummyInput()
        .appendField("mètres");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Fait avancer le robot de la distance spécifiée");
    this.setHelpUrl("");
  }
};

// Bloc pour reculer
Blockly.Blocks['move_backward'] = {
  init: function() {
    this.appendValueInput("DISTANCE")
        .setCheck("Number")
        .appendField("Reculer de");
    this.appendDummyInput()
        .appendField("mètres");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Fait reculer le robot de la distance spécifiée");
    this.setHelpUrl("");
  }
};

// Bloc pour tourner à droite
Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("Tourner à droite de");
    this.appendDummyInput()
        .appendField("degrés");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Fait tourner le robot vers la droite de l'angle spécifié");
    this.setHelpUrl("");
  }
};

// Bloc pour tourner à gauche
Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("Tourner à gauche de");
    this.appendDummyInput()
        .appendField("degrés");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Fait tourner le robot vers la gauche de l'angle spécifié");
    this.setHelpUrl("");
  }
};

// Bloc pour arrêter
Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Arrête tous les mouvements du robot");
    this.setHelpUrl("");
  }
}; 