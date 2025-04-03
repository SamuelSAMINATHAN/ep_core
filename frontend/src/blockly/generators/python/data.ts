export {};

declare const Blockly: any;

// Ensure Blockly and Python are available
if (typeof Blockly === 'undefined' || !Blockly.Python) {
  console.error('Blockly or Blockly.Python is not loaded.');
} else {
  const Python = Blockly.Python;

  // Générateur pour définir une liste
  Python['data_list_define'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const listValues = Python.valueToCode(block, 'LIST_VALUES', Python.ORDER_ATOMIC) || "[]";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + ' = ' + listValues + '\n';
  };

  // Générateur pour ajouter un élément à la liste
  Python['data_list_add'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const item = Python.valueToCode(block, 'ITEM', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + '.append(' + item + ')\n';
  };

  // Générateur pour insérer un élément dans la liste
  Python['data_list_insert'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const position = Python.valueToCode(block, 'POSITION', Python.ORDER_ATOMIC) || "0";
    const item = Python.valueToCode(block, 'ITEM', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + '.insert(' + position + ', ' + item + ')\n';
  };

  // Générateur pour obtenir un élément de la liste
  Python['data_list_get'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const position = Python.valueToCode(block, 'POSITION', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    const code = varName + '[' + position + ']';
    return [code, Python.ORDER_MEMBER];
  };

  // Générateur pour remplacer un élément de la liste
  Python['data_list_set'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const position = Python.valueToCode(block, 'POSITION', Python.ORDER_ATOMIC) || "0";
    const item = Python.valueToCode(block, 'ITEM', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + '[' + position + '] = ' + item + '\n';
  };

  // Générateur pour obtenir la longueur de la liste
  Python['data_list_length'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    const code = 'len(' + varName + ')';
    return [code, Python.ORDER_FUNCTION_CALL];
  };

  // Générateur pour supprimer un élément de la liste par position
  Python['data_list_remove'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const position = Python.valueToCode(block, 'POSITION', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + '.pop(' + position + ')\n';
  };

  // Générateur pour supprimer la première occurrence d'un élément
  Python['data_list_remove_item'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const item = Python.valueToCode(block, 'ITEM', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return 'if ' + item + ' in ' + varName + ':\n' +
           '  ' + varName + '.remove(' + item + ')\n';
  };

  // Générateur pour vider la liste
  Python['data_list_empty'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    return varName + '.clear()\n';
  };

  // Générateur pour créer une liste vide
  Python['data_list_create'] = function(block: any) {
    return ['[]', Python.ORDER_ATOMIC];
  };

  // Générateur pour vérifier si un élément est dans la liste
  Python['data_list_contains'] = function(block: any) {
    const listName = Python.valueToCode(block, 'LIST_NAME', Python.ORDER_ATOMIC) || "'ma_liste'";
    const item = Python.valueToCode(block, 'ITEM', Python.ORDER_ATOMIC) || "0";
    
    // Supprimer les guillemets pour le nom de variable
    const varName = listName.replace(/'/g, '').replace(/"/g, '');
    
    const code = item + ' in ' + varName;
    return [code, Python.ORDER_RELATIONAL];
  };
} 