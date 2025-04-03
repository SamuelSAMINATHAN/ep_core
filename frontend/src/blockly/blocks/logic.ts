import { BlocklyInstance } from '../types';

declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly
if (typeof Blockly === 'undefined') {
  console.error('Blockly n\'est pas disponible');
} else {
  // Bloc de condition if simple
  Blockly.Blocks['controls_if'] = {
    init: function() {
      this.setColour('#5B80A5');
      this.appendValueInput('IF0')
          .setCheck('Boolean')
          .appendField('si');
      this.appendStatementInput('DO0')
          .appendField('alors');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Bloc if/else
  Blockly.Blocks['controls_ifelse'] = {
    init: function() {
      this.setColour('#5B80A5');
      this.appendValueInput('IF0')
          .setCheck('Boolean')
          .appendField('si');
      this.appendStatementInput('DO0')
          .appendField('alors');
      this.appendStatementInput('ELSE')
          .appendField('sinon');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Bloc de comparaison
  Blockly.Blocks['logic_compare'] = {
    init: function() {
      this.setColour('#5B80A5');
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A');
      this.appendValueInput('B')
          .appendField(new Blockly.FieldDropdown([
            ['=', 'EQ'],
            ['≠', 'NEQ'],
            ['<', 'LT'],
            ['≤', 'LTE'],
            ['>', 'GT'],
            ['≥', 'GTE']
          ]), 'OP');
      this.setInputsInline(true);
    }
  };

  // Bloc d'opération logique (ET/OU)
  Blockly.Blocks['logic_operation'] = {
    init: function() {
      this.setColour('#5B80A5');
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A')
          .setCheck('Boolean');
      this.appendValueInput('B')
          .setCheck('Boolean')
          .appendField(new Blockly.FieldDropdown([
            ['et', 'AND'],
            ['ou', 'OR']
          ]), 'OP');
      this.setInputsInline(true);
    }
  };

  // Bloc de valeur booléenne
  Blockly.Blocks['logic_boolean'] = {
    init: function() {
      this.setColour('#5B80A5');
      this.setOutput(true, 'Boolean');
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([
            ['vrai', 'TRUE'],
            ['faux', 'FALSE']
          ]), 'BOOL');
    }
  };
} 