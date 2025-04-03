import { BlocklyInstance } from '../types';

declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly
if (typeof Blockly === 'undefined') {
  console.error('Blockly n\'est pas disponible');
} else {
  // Bloc répéter X fois
  Blockly.Blocks['controls_repeat_ext'] = {
    init: function() {
      this.setColour('#5BA55B');
      this.appendValueInput('TIMES')
          .setCheck('Number')
          .appendField('répéter');
      this.appendStatementInput('DO')
          .appendField('faire');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Bloc tant que / jusqu'à ce que
  Blockly.Blocks['controls_whileUntil'] = {
    init: function() {
      this.setColour('#5BA55B');
      this.appendValueInput('BOOL')
          .setCheck('Boolean')
          .appendField(new Blockly.FieldDropdown([
            ['tant que', 'WHILE'],
            ['jusqu\'à ce que', 'UNTIL']
          ]), 'MODE');
      this.appendStatementInput('DO')
          .appendField('faire');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Bloc pour
  Blockly.Blocks['controls_for'] = {
    init: function() {
      this.setColour('#5BA55B');
      this.appendDummyInput()
          .appendField('pour')
          .appendField(new Blockly.FieldVariable('i'), 'VAR');
      this.appendValueInput('FROM')
          .setCheck('Number')
          .appendField('de');
      this.appendValueInput('TO')
          .setCheck('Number')
          .appendField('à');
      this.appendValueInput('BY')
          .setCheck('Number')
          .appendField('par pas de');
      this.appendStatementInput('DO')
          .appendField('faire');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };
} 