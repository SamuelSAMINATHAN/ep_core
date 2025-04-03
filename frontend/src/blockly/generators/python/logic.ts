import { BlocklyBlock, BlocklyInstance } from '../../types';

export {};

declare const Blockly: BlocklyInstance;

if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible');
} else {
  const Python = Blockly.Python;

  // Générateur pour le bloc logic_compare
  Python['logic_compare'] = function(block: BlocklyBlock) {
    const OPERATORS: {[key: string]: string} = {
      'EQ': '==',
      'NEQ': '!=',
      'LT': '<',
      'LTE': '<=',
      'GT': '>',
      'GTE': '>='
    };
    const operator = OPERATORS[block.getFieldValue('OP')];
    const order = Python.ORDER_RELATIONAL;
    const argument0 = Python.valueToCode(block, 'A', order) || '0';
    const argument1 = Python.valueToCode(block, 'B', order) || '0';
    const code = argument0 + ' ' + operator + ' ' + argument1;
    return [code, order];
  };

  // Générateur pour le bloc logic_operation
  Python['logic_operation'] = function(block: BlocklyBlock) {
    const operator = (block.getFieldValue('OP') === 'AND') ? ' and ' : ' or ';
    const order = Python.ORDER_LOGICAL_AND;
    const argument0 = Python.valueToCode(block, 'A', order) || 'False';
    const argument1 = Python.valueToCode(block, 'B', order) || 'False';
    const code = argument0 + operator + argument1;
    return [code, order];
  };

  // Générateur pour le bloc logic_boolean
  Python['logic_boolean'] = function(block: BlocklyBlock) {
    const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'True' : 'False';
    return [code, Python.ORDER_ATOMIC];
  };

  // Générateur pour le bloc controls_if
  Python['controls_if'] = function(block: BlocklyBlock) {
    let code = '';
    let conditionCode;
    let branchCode;
    
    // If principal
    conditionCode = Python.valueToCode(block, 'IF0', Python.ORDER_NONE) || 'False';
    branchCode = Python.statementToCode(block, 'DO0') || Python.PASS;
    code = 'if ' + conditionCode + ':\n' + branchCode;
    
    // Elif
    for (let i = 1; i <= ((block as any).elseifCount_ || 0); i++) {
      conditionCode = Python.valueToCode(block, 'IF' + i, Python.ORDER_NONE) || 'False';
      branchCode = Python.statementToCode(block, 'DO' + i) || Python.PASS;
      code += 'elif ' + conditionCode + ':\n' + branchCode;
    }
    
    // Else
    if ((block as any).elseCount_) {
      branchCode = Python.statementToCode(block, 'ELSE') || Python.PASS;
      code += 'else:\n' + branchCode;
    }
    
    return code;
  };

  // Générateur pour le bloc controls_ifelse
  Python['controls_ifelse'] = function(block: BlocklyBlock) {
    const conditionCode = Python.valueToCode(block, 'IF0', Python.ORDER_NONE) || 'False';
    const branchIfCode = Python.statementToCode(block, 'DO0') || Python.PASS;
    const branchElseCode = Python.statementToCode(block, 'ELSE') || Python.PASS;
    return 'if ' + conditionCode + ':\n' + branchIfCode + 'else:\n' + branchElseCode;
  };
} 