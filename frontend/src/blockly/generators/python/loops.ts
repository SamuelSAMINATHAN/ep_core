import { BlocklyBlock, BlocklyInstance } from '../../types';

export {};

declare const Blockly: BlocklyInstance;

if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible');
} else {
  const Python = Blockly.Python;

  // Générateur pour le bloc controls_repeat_ext (répéter X fois)
  Python['controls_repeat_ext'] = function(block: BlocklyBlock) {
    const repeats = Python.valueToCode(block, 'TIMES', Python.ORDER_NONE) || '0';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    return 'for _ in range(' + repeats + '):\n' + branch;
  };

  // Générateur pour le bloc controls_whileUntil (tant que / jusqu'à ce que)
  Python['controls_whileUntil'] = function(block: BlocklyBlock) {
    const until = block.getFieldValue('MODE') === 'UNTIL';
    let argument0 = Python.valueToCode(block, 'BOOL', Python.ORDER_NONE) || 'False';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    if (until) {
      argument0 = 'not (' + argument0 + ')';
    }
    return 'while ' + argument0 + ':\n' + branch;
  };

  // Générateur pour le bloc controls_for (pour i de X à Y par pas de Z)
  Python['controls_for'] = function(block: BlocklyBlock) {
    const variable = Python.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    const from = Python.valueToCode(block, 'FROM', Python.ORDER_NONE) || '0';
    const to = Python.valueToCode(block, 'TO', Python.ORDER_NONE) || '0';
    const step = Python.valueToCode(block, 'BY', Python.ORDER_NONE) || '1';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    return 'for ' + variable + ' in range(' + from + ', ' + to + ' + 1, ' + step + '):\n' + branch;
  };
} 