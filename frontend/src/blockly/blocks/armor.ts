import { BlocklyInstance } from '../types';

declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly
if (typeof Blockly === 'undefined') {
  console.error('Blockly n\'est pas disponible');
} else {
  // Bloc pour l'événement de touche d'armure
  Blockly.Blocks['armor_hit_event'] = {
    init: function() {
      this.setColour('#DC143C');
      this.appendDummyInput()
          .appendField('quand l\'armure est touchée');
      this.appendStatementInput('DO')
          .appendField('faire');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };

  // Bloc pour obtenir les informations de la dernière touche
  Blockly.Blocks['armor_last_hit_info'] = {
    init: function() {
      this.setColour('#DC143C');
      this.appendDummyInput()
          .appendField('dernière touche')
          .appendField(new Blockly.FieldDropdown([
            ['position', 'POSITION'],
            ['temps', 'TIME'],
            ['type', 'TYPE']
          ]), 'INFO');
      this.setOutput(true);
    }
  };

  // Bloc pour vérifier si une armure est touchée
  Blockly.Blocks['armor_is_hit'] = {
    init: function() {
      this.setColour('#DC143C');
      this.appendDummyInput()
          .appendField('armure')
          .appendField(new Blockly.FieldDropdown([
            ['avant', 'FRONT'],
            ['arrière', 'BACK'],
            ['gauche', 'LEFT'],
            ['droite', 'RIGHT'],
            ['toutes', 'ALL']
          ]), 'POSITION')
          .appendField('est touchée');
      this.setOutput(true, 'Boolean');
    }
  };

  // Bloc armor_set_sensitivity
  Blockly.Blocks['armor_set_sensitivity'] = {
    init: function() {
      this.appendValueInput('SENSITIVITY')
          .setCheck('Number')
          .appendField("Définir la sensibilité de l'armure à");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#DC143C');
      this.setTooltip('Ajuste la sensibilité de détection des impacts. Plus la valeur est élevée, plus la détection est sensible');
      this.setInputsInline(true);
    }
  };

  // Bloc armor_wait_for_hit
  Blockly.Blocks['armor_wait_for_hit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Attendre un impact sur l'armure")
          .appendField(new Blockly.FieldDropdown([
            ['avant', 'front'],
            ['arrière', 'back'],
            ['gauche', 'left'],
            ['droite', 'right'],
            ['aléatoire', 'random']
          ]), 'ZONE');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#DC143C');
      this.setTooltip('Interrompt l\'exécution jusqu\'à ce que l\'armure soit touchée à l\'endroit spécifié');
    }
  };

  // Bloc armor_ir_hit_event
  Blockly.Blocks['armor_ir_hit_event'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Lorsqu'un robot est touché par un faisceau infrarouge");
      this.appendStatementInput('DO')
          .setCheck(null);
      this.setColour('#DC143C');
      this.setTooltip('Déclenche un événement quand un capteur infrarouge détecte un impact');
    }
  };

  // Bloc armor_wait_for_ir_hit
  Blockly.Blocks['armor_wait_for_ir_hit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Attendez que le robot soit touché par un faisceau infrarouge");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#DC143C');
      this.setTooltip('Attend qu\'un capteur infrarouge détecte une attaque avant de poursuivre');
    }
  };

  // Bloc armor_is_ir_hit
  Blockly.Blocks['armor_is_ir_hit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot touché par un faisceau infrarouge");
      this.setOutput(true, 'Boolean');
      this.setColour('#DC143C');
      this.setTooltip('Retourne vrai si un impact infrarouge a été détecté sur le robot');
    }
  };
} 