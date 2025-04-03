import { BlocklyBlock, BlocklyInstance } from '../../types';

export {};

declare const Blockly: BlocklyInstance;

if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible');
} else {
  const Python = Blockly.Python;

  // Générateur pour le bloc variables_get (obtenir une variable)
  Python['variables_get'] = function(block: BlocklyBlock) {
    const varName = Python.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    return [varName, Python.ORDER_ATOMIC];
  };

  // Générateur pour le bloc variables_set (définir une variable)
  Python['variables_set'] = function(block: BlocklyBlock) {
    const argument0 = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
    const varName = Python.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    return varName + ' = ' + argument0 + '\n';
  };
} 