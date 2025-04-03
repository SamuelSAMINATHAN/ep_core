import { BlocklyInstance } from '../types';

declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly
if (typeof Blockly === 'undefined') {
  console.error('Blockly n\'est pas disponible');
} else {
  // Bloc nombre
  Blockly.Blocks['math_number'] = {
    init: function() {
      this.setColour('#5B67A5');
      this.setOutput(true, 'Number');
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0), 'NUM');
    }
  };

  // Bloc opération arithmétique
  Blockly.Blocks['math_arithmetic'] = {
    init: function() {
      this.setColour('#5B67A5');
      this.setOutput(true, 'Number');
      this.appendValueInput('A')
          .setCheck('Number');
      this.appendValueInput('B')
          .setCheck('Number')
          .appendField(new Blockly.FieldDropdown([
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['×', 'MULTIPLY'],
            ['÷', 'DIVIDE'],
            ['^', 'POWER']
          ]), 'OP');
      this.setInputsInline(true);
    }
  };

  // Bloc fonction mathématique
  Blockly.Blocks['math_single'] = {
    init: function() {
      this.setColour('#5B67A5');
      this.setOutput(true, 'Number');
      this.appendValueInput('NUM')
          .setCheck('Number')
          .appendField(new Blockly.FieldDropdown([
            ['racine carrée', 'ROOT'],
            ['valeur absolue', 'ABS'],
            ['opposé', 'NEG'],
            ['ln', 'LN'],
            ['log10', 'LOG10'],
            ['e^', 'EXP'],
            ['10^', 'POW10'],
            ['arrondi', 'ROUND'],
            ['arrondi supérieur', 'ROUNDUP'],
            ['arrondi inférieur', 'ROUNDDOWN'],
            ['sin', 'SIN'],
            ['cos', 'COS'],
            ['tan', 'TAN']
          ]), 'OP');
    }
  };
} 