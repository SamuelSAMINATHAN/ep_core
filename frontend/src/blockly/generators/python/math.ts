import { BlocklyBlock, BlocklyInstance } from '../../types';

export {};

declare const Blockly: BlocklyInstance;

if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible');
} else {
  const Python = Blockly.Python;

  // Générateur pour le bloc math_number (nombre)
  Python['math_number'] = function(block: BlocklyBlock) {
    const code = String(block.getFieldValue('NUM'));
    return [code, Python.ORDER_ATOMIC];
  };

  // Générateur pour le bloc math_arithmetic (opérations arithmétiques)
  Python['math_arithmetic'] = function(block: BlocklyBlock) {
    // Ajouter l'import de math si nécessaire
    Python.definitions_['import_math'] = 'import math';
    
    const OPERATORS: {[key: string]: [string, number]} = {
      'ADD': [' + ', Python.ORDER_ADDITIVE],
      'MINUS': [' - ', Python.ORDER_ADDITIVE],
      'MULTIPLY': [' * ', Python.ORDER_MULTIPLICATIVE],
      'DIVIDE': [' / ', Python.ORDER_MULTIPLICATIVE],
      'POWER': [' ** ', Python.ORDER_EXPONENTIATION]
    };
    const tuple = OPERATORS[block.getFieldValue('OP')];
    const operator = tuple[0];
    const order = tuple[1];
    const argument0 = Python.valueToCode(block, 'A', order) || '0';
    const argument1 = Python.valueToCode(block, 'B', order) || '0';
    const code = argument0 + operator + argument1;
    return [code, order];
  };

  // Générateur pour le bloc math_single (fonctions mathématiques)
  Python['math_single'] = function(block: BlocklyBlock) {
    // Ajouter l'import de math
    Python.definitions_['import_math'] = 'import math';
    
    const operator = block.getFieldValue('OP');
    let code;
    let arg;
    if (operator === 'NEG') {
      arg = Python.valueToCode(block, 'NUM', Python.ORDER_UNARY_SIGN) || '0';
      code = '-' + arg;
      return [code, Python.ORDER_UNARY_SIGN];
    }
    if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
      arg = Python.valueToCode(block, 'NUM', Python.ORDER_MULTIPLICATIVE) || '0';
    } else {
      arg = Python.valueToCode(block, 'NUM', Python.ORDER_NONE) || '0';
    }
    switch (operator) {
      case 'ABS':
        code = 'abs(' + arg + ')';
        break;
      case 'ROOT':
        code = 'math.sqrt(' + arg + ')';
        break;
      case 'LN':
        code = 'math.log(' + arg + ')';
        break;
      case 'LOG10':
        code = 'math.log10(' + arg + ')';
        break;
      case 'EXP':
        code = 'math.exp(' + arg + ')';
        break;
      case 'POW10':
        code = 'math.pow(10,' + arg + ')';
        break;
      case 'ROUND':
        code = 'round(' + arg + ')';
        break;
      case 'ROUNDUP':
        code = 'math.ceil(' + arg + ')';
        break;
      case 'ROUNDDOWN':
        code = 'math.floor(' + arg + ')';
        break;
      case 'SIN':
        code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
        break;
      case 'COS':
        code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
        break;
      case 'TAN':
        code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
        break;
      default:
        throw Error('Unknown math operator: ' + operator);
    }
    return [code, Python.ORDER_FUNCTION_CALL];
  };
} 