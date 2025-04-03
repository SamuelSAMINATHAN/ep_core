export {};
declare const Blockly: any;

// Bloc command_wait
Blockly.Blocks['command_wait'] = {
  init: function() {
    this.appendValueInput('TIME')
        .setCheck('Number')
        .appendField('Attendre');
    this.appendDummyInput()
        .appendField('secondes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Attend le nombre de secondes spécifié avant de continuer');
    this.setInputsInline(true);
  }
};

// Bloc command_repeat
Blockly.Blocks['command_repeat'] = {
  init: function() {
    this.appendValueInput('TIMES')
        .setCheck('Number')
        .appendField('Répéter');
    this.appendDummyInput()
        .appendField('fois');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Régler un programme interne pour qu\'il se répète plusieurs fois');
    this.setInputsInline(true);
  }
};

// Bloc command_forever
Blockly.Blocks['command_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Toujours');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Réglez un programme interne pour qu\'il se répète continuellement');
  }
};

// Bloc command_if
Blockly.Blocks['command_if'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('Si');
    this.appendDummyInput()
        .appendField(', alors');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Lorsque la condition est vraie, un programme interne est exécuté');
    this.setInputsInline(true);
  }
};

// Bloc command_if_else
Blockly.Blocks['command_if_else'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('Si');
    this.appendDummyInput()
        .appendField(', alors');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.appendDummyInput()
        .appendField('Sinon');
    this.appendStatementInput('ELSE')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Lorsque la condition est vraie, le programme interne « alors » est exécuté. Si ce n\'est pas le cas, le programme interne « sinon » est exécuté');
    this.setInputsInline(true);
  }
};

// Bloc command_repeat_until
Blockly.Blocks['command_repeat_until'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('Répéter jusqu\'à');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Un programme interne est répété jusqu\'à ce que la condition soit vraie. Si la condition est vraie, la boucle est arrêtée et la commande suivante est exécutée. Sinon, le programme continue de se répéter');
  }
};

// Bloc command_stop_program
Blockly.Blocks['command_stop_program'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Arrêter le programme');
    this.setPreviousStatement(true, null);
    this.setColour('#9966FF');
    this.setTooltip('Arrête l\'exécution du programme pour le bloc en cours et quitter');
  }
}; 