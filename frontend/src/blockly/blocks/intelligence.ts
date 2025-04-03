export {};
declare const Blockly: any;

// Bloc intelligence_toggle_recognition
Blockly.Blocks['intelligence_toggle_recognition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['activer', 'enable'],
          ['désactiver', 'disable']
        ]), 'ACTION')
        .appendField("l'identification de")
        .appendField(new Blockly.FieldDropdown([
          ['marqueurs visuels', 'markers'],
          ['lignes', 'lines'],
          ['applaudissements', 'claps']
        ]), 'ELEMENT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Active ou désactive la reconnaissance d\'éléments spécifiques');
  }
};

// Bloc intelligence_set_marker_distance
Blockly.Blocks['intelligence_set_marker_distance'] = {
  init: function() {
    this.appendValueInput('DISTANCE')
        .setCheck('Number')
        .appendField("Définir la distance d'identification des marqueurs visuels à");
    this.appendDummyInput()
        .appendField("m");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Définit la portée maximale de détection des marqueurs visuels');
    this.setInputsInline(true);
  }
};

// Bloc intelligence_set_recognition_color
Blockly.Blocks['intelligence_set_recognition_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Définir")
        .appendField(new Blockly.FieldDropdown([
          ['rouge', 'red'],
          ['bleu', 'blue'],
          ['vert', 'green'],
          ['jaune', 'yellow'],
          ['orange', 'orange'],
          ['violet', 'purple'],
          ['noir', 'black'],
          ['blanc', 'white']
        ]), 'COLOR')
        .appendField("comme couleur d'identification de")
        .appendField(new Blockly.FieldDropdown([
          ['marqueur visuel', 'marker'],
          ['ligne', 'line']
        ]), 'TYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Détermine quelles couleurs seront reconnues comme ligne ou marqueur');
  }
};

// Bloc intelligence_set_exposure
Blockly.Blocks['intelligence_set_exposure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Définir la valeur d'exposition à")
        .appendField(new Blockly.FieldDropdown([
          ['faible', 'low'],
          ['moyenne', 'medium'],
          ['élevée', 'high']
        ]), 'LEVEL');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Ajuste la sensibilité à la lumière (utile pour le suivi de ligne)');
  }
};

// Bloc intelligence_identify_and_aim
Blockly.Blocks['intelligence_identify_and_aim'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Identifier")
        .appendField(new Blockly.FieldDropdown([
          ['marqueur visuel', 'marker'],
          ['personne', 'person'],
          ['ligne', 'line'],
          ['forme', 'shape'],
          ['robot S1', 'robot']
        ]), 'ELEMENT')
        .appendField("et y pointer le blaster");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Le robot repère un élément visuel et oriente son blaster vers lui');
  }
};

// Bloc intelligence_recognition_event
Blockly.Blocks['intelligence_recognition_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Quand le robot identifie")
        .appendField(new Blockly.FieldDropdown([
          ['un marqueur visuel', 'marker'],
          ['une personne', 'person'],
          ['une ligne', 'line'],
          ['une forme', 'shape'],
          ['un applaudissement', 'clap_once'],
          ['deux applaudissements', 'clap_twice'],
          ['un geste', 'gesture'],
          ['un robot S1', 'robot']
        ]), 'ELEMENT');
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setColour('#800080');
    this.setTooltip('Exécute un bloc quand un élément est détecté');
  }
};

// Bloc intelligence_is_recognized
Blockly.Blocks['intelligence_is_recognized'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['marqueur visuel', 'marker'],
          ['personne', 'person'],
          ['ligne', 'line'],
          ['forme', 'shape'],
          ['applaudissement', 'clap_once'],
          ['deux applaudissements', 'clap_twice'],
          ['geste', 'gesture'],
          ['robot S1', 'robot']
        ]), 'ELEMENT')
        .appendField("identifié(e)");
    this.setOutput(true, 'Boolean');
    this.setColour('#800080');
    this.setTooltip('Retourne vrai si l\'élément est détecté');
  }
};

// Bloc intelligence_wait_for_recognition
Blockly.Blocks['intelligence_wait_for_recognition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attendre jusqu'à l'identification de")
        .appendField(new Blockly.FieldDropdown([
          ['marqueur visuel', 'marker'],
          ['personne', 'person'],
          ['ligne', 'line'],
          ['forme', 'shape'],
          ['applaudissement', 'clap_once'],
          ['deux applaudissements', 'clap_twice'],
          ['geste', 'gesture'],
          ['robot S1', 'robot']
        ]), 'ELEMENT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#800080');
    this.setTooltip('Suspend l\'exécution jusqu\'à ce qu\'un élément soit détecté');
  }
};

// Bloc intelligence_marker_info
Blockly.Blocks['intelligence_marker_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infos sur le marqueur visuel identifié");
    this.setOutput(true, null);
    this.setColour('#800080');
    this.setTooltip('Donne les infos sur le marqueur détecté : nombre, ID, position (X, Y), largeur, hauteur');
  }
};

// Bloc intelligence_object_info
Blockly.Blocks['intelligence_object_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infos sur")
        .appendField(new Blockly.FieldDropdown([
          ['personne', 'person'],
          ['robot S1', 'robot']
        ]), 'ELEMENT')
        .appendField("identifié(e)");
    this.setOutput(true, null);
    this.setColour('#800080');
    this.setTooltip('Retourne les données liées à un objet/personne détecté(e) : N, id, X, Y, largeur, hauteur');
  }
};

// Bloc intelligence_gesture_info
Blockly.Blocks['intelligence_gesture_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infos sur le geste identifié");
    this.setOutput(true, null);
    this.setColour('#800080');
    this.setTooltip('Donne les infos détaillées sur un geste reconnu (position, taille, ID...)');
  }
};

// Bloc intelligence_line_info
Blockly.Blocks['intelligence_line_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infos sur la ligne identifiée");
    this.setOutput(true, null);
    this.setColour('#800080');
    this.setTooltip('Donne les paramètres d\'une ligne détectée (points, coordonnées, courbure...)');
  }
};

// Bloc intelligence_lines_info
Blockly.Blocks['intelligence_lines_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infos sur les lignes identifiées");
    this.setOutput(true, null);
    this.setColour('#800080');
    this.setTooltip('Donne les informations cumulées sur plusieurs lignes détectées');
  }
};

// Bloc intelligence_brightness
Blockly.Blocks['intelligence_brightness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Luminosité actuelle");
    this.setOutput(true, 'Number');
    this.setColour('#800080');
    this.setTooltip('Retourne la valeur de luminosité de l\'environnement détectée par la caméra');
  }
};

// Bloc intelligence_aim_position
Blockly.Blocks['intelligence_aim_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position de visée");
    this.setOutput(true, 'Number');
    this.setColour('#800080');
    this.setTooltip('Retourne la position de visée actuelle : X (abscisse) ou Y (ordonnée)');
  }
}; 