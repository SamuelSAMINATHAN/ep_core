export {};
declare const Blockly: any;

// Bloc gimbal_move
Blockly.Blocks['gimbal_move'] = {
  init: function() {
    this.appendValueInput('PITCH_SPEED')
        .setCheck('Number')
        .appendField('Tourner la tourelle vitesse tangage');
    this.appendValueInput('YAW_SPEED')
        .setCheck('Number')
        .appendField('vitesse lacet');
    this.appendValueInput('DURATION')
        .setCheck('Number')
        .appendField('durée (s)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9400D3');
    this.setTooltip('Tourne la tourelle avec les vitesses spécifiées');
  }
};

// Bloc gimbal_stop
Blockly.Blocks['gimbal_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Arrêter la tourelle');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9400D3');
    this.setTooltip('Arrête tout mouvement de la tourelle');
  }
}; 