export {};
declare const Blockly: any;

// Bloc led_set_flash_frequency
Blockly.Blocks['led_set_flash_frequency'] = {
  init: function() {
    this.appendValueInput('FREQUENCY')
        .setCheck('Number')
        .appendField("Configurer la fréquence de clignotement des LED")
        .appendField(new Blockly.FieldDropdown([
          ['toutes', 'all'],
          ['châssis', 'chassis'],
          ['tourelle', 'gimbal']
        ]), 'ZONE')
        .appendField("à");
    this.appendDummyInput()
        .appendField("Hz");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Configure la fréquence de clignotement des LED en Hz');
    this.setInputsInline(true);
  }
};

// Bloc led_set_chassis_color
Blockly.Blocks['led_set_chassis_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Définir la couleur LED")
        .appendField(new Blockly.FieldDropdown([
          ['châssis avant gauche', 'front_left'],
          ['châssis avant droit', 'front_right'],
          ['châssis arrière gauche', 'rear_left'],
          ['châssis arrière droit', 'rear_right'],
          ['châssis complet', 'chassis_all']
        ]), 'ZONE');
    this.appendValueInput('R')
        .setCheck('Number')
        .appendField("R:");
    this.appendValueInput('G')
        .setCheck('Number')
        .appendField("G:");
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField("B:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['fixe', 'on'],
          ['clignotement lent', 'blink_slow'],
          ['clignotement rapide', 'blink_fast'],
          ['éteint', 'off']
        ]), 'BEHAVIOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Définit la couleur RGB et le comportement des LED du châssis');
    this.setInputsInline(true);
  }
};

// Bloc led_set_gimbal_color
Blockly.Blocks['led_set_gimbal_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Définir la couleur de la tourelle")
        .appendField(new Blockly.FieldDropdown([
          ['côté gauche', 'left'],
          ['côté droit', 'right'],
          ['tourelle complète', 'all']
        ]), 'ZONE');
    this.appendValueInput('R')
        .setCheck('Number')
        .appendField("R:");
    this.appendValueInput('G')
        .setCheck('Number')
        .appendField("G:");
    this.appendValueInput('B')
        .setCheck('Number')
        .appendField("B:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['fixe', 'on'],
          ['clignotement lent', 'blink_slow'],
          ['clignotement rapide', 'blink_fast'],
          ['éteint', 'off']
        ]), 'BEHAVIOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Définit la couleur RGB et le comportement des LED de la tourelle');
    this.setInputsInline(true);
  }
};

// Bloc led_set_gimbal_sequence
Blockly.Blocks['led_set_gimbal_sequence'] = {
  init: function() {
    this.appendValueInput('SEQUENCE')
        .setCheck('Number')
        .appendField("Configurer la séquence des LED de la tourelle")
        .appendField(new Blockly.FieldDropdown([
          ['côté gauche', 'left'],
          ['côté droit', 'right'],
          ['tourelle complète', 'all']
        ]), 'ZONE')
        .appendField("à");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['fixe', 'on'],
          ['clignotement lent', 'blink_slow'],
          ['clignotement rapide', 'blink_fast']
        ]), 'BEHAVIOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Configure une séquence prédéfinie pour les LED de la tourelle');
    this.setInputsInline(true);
  }
};

// Bloc led_turn_off
Blockly.Blocks['led_turn_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Éteindre les LED")
        .appendField(new Blockly.FieldDropdown([
          ['toutes', 'all'],
          ['châssis', 'chassis'],
          ['tourelle', 'gimbal']
        ]), 'ZONE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Éteint les LED spécifiées');
  }
};

// Bloc led_set_sight
Blockly.Blocks['led_set_sight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Régler lumière de visée")
        .appendField(new Blockly.FieldDropdown([
          ['allumée', 'on'],
          ['éteinte', 'off']
        ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#33CC33');
    this.setTooltip('Allume ou éteint la lumière de visée de la tourelle');
  }
}; 