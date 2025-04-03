export {};
declare const Blockly: any;

// Bloc pour définir une liste
Blockly.Blocks['data_list_define'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Définir la liste');
    this.appendValueInput('LIST_VALUES')
        .setCheck('Array')
        .appendField('avec les valeurs');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Définit une liste avec les valeurs spécifiées');
    this.setInputsInline(true);
  }
};

// Bloc pour ajouter un élément à une liste
Blockly.Blocks['data_list_add'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Ajouter à la liste');
    this.appendValueInput('ITEM')
        .setCheck(null)
        .appendField('l\'élément');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Ajoute un élément à la fin d\'une liste');
    this.setInputsInline(true);
  }
};

// Autres blocs pour les listes
Blockly.Blocks['data_list_insert'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Dans la liste');
    this.appendValueInput('POSITION')
        .setCheck('Number')
        .appendField('insérer à la position');
    this.appendValueInput('ITEM')
        .setCheck(null)
        .appendField('l\'élément');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Insère un élément à une position spécifique dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_get'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('De la liste');
    this.appendValueInput('POSITION')
        .setCheck('Number')
        .appendField('obtenir l\'élément à la position');
    this.setOutput(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Retourne l\'élément à la position spécifiée dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_set'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Dans la liste');
    this.appendValueInput('POSITION')
        .setCheck('Number')
        .appendField('remplacer l\'élément à la position');
    this.appendValueInput('ITEM')
        .setCheck(null)
        .appendField('par');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Remplace l\'élément à la position spécifiée dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_length'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Longueur de la liste');
    this.setOutput(true, 'Number');
    this.setColour('#A5675B');
    this.setTooltip('Retourne le nombre d\'éléments dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_remove'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('De la liste');
    this.appendValueInput('POSITION')
        .setCheck('Number')
        .appendField('supprimer l\'élément à la position');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Supprime l\'élément à la position spécifiée dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_remove_item'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('De la liste');
    this.appendValueInput('ITEM')
        .setCheck(null)
        .appendField('supprimer la première occurrence de');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Supprime la première occurrence d\'un élément dans la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_empty'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('Vider la liste');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A5675B');
    this.setTooltip('Supprime tous les éléments de la liste');
    this.setInputsInline(true);
  }
};

Blockly.Blocks['data_list_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Créer une liste vide');
    this.setOutput(true, 'Array');
    this.setColour('#A5675B');
    this.setTooltip('Crée une nouvelle liste vide');
  }
};

Blockly.Blocks['data_list_contains'] = {
  init: function() {
    this.appendValueInput('LIST_NAME')
        .setCheck('String')
        .appendField('La liste');
    this.appendValueInput('ITEM')
        .setCheck(null)
        .appendField('contient');
    this.setOutput(true, 'Boolean');
    this.setColour('#A5675B');
    this.setTooltip('Vérifie si un élément est présent dans la liste');
    this.setInputsInline(true);
  }
}; 