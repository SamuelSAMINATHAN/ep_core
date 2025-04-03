import { BlocklyBlock, BlocklyInstance } from '../../types';

// Rendre ce fichier un module en ajoutant un export
export {};

// Utiliser l'instance globale de Blockly
declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly.Python
if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible. Les générateurs Python ne seront pas enregistrés.');
} else {
  const Python = Blockly.Python;

  // Bloc command_wait
  Python['command_wait'] = function(block: BlocklyBlock) {
    const time = Python.valueToCode(block, 'TIME', Python.ORDER_ATOMIC) || '1';
    // Importation time nécessaire
    Python.definitions_['import_time'] = 'import time';
    return `time.sleep(${time})\n`;
  };

  // Bloc command_repeat
  Python['command_repeat'] = function(block: BlocklyBlock) {
    const times = Python.valueToCode(block, 'TIMES', Python.ORDER_ATOMIC) || '1';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    // Utiliser une boucle for avec range
    const loopVar = Python.variableDB_.getDistinctName('count', Blockly.VARIABLE_CATEGORY_NAME);
    return `for ${loopVar} in range(${times}):\n${branch}`;
  };

  // Bloc command_forever
  Python['command_forever'] = function(block: BlocklyBlock) {
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    // Boucle while True
    return `while True:\n${branch}`;
  };

  // Bloc command_if
  Python['command_if'] = function(block: BlocklyBlock) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_NONE) || 'False';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    return `if ${condition}:\n${branch}`;
  };

  // Bloc command_if_else
  Python['command_if_else'] = function(block: BlocklyBlock) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_NONE) || 'False';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    const elseBranch = Python.statementToCode(block, 'ELSE') || Python.PASS;
    
    return `if ${condition}:\n${branch}else:\n${elseBranch}`;
  };

  // Bloc command_repeat_until
  Python['command_repeat_until'] = function(block: BlocklyBlock) {
    const condition = Python.valueToCode(block, 'CONDITION', Python.ORDER_NONE) || 'True';
    const branch = Python.statementToCode(block, 'DO') || Python.PASS;
    
    // Utiliser while not (condition)
    return `while not (${condition}):\n${branch}`;
  };

  // Bloc command_stop_program
  Python['command_stop_program'] = function(block: BlocklyBlock) {
    // Utiliser sys.exit() pour arrêter le programme
    Python.definitions_['import_sys'] = 'import sys';
    
    return 'sys.exit()\n';
  };
} 