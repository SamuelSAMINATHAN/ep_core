export {};
declare const Blockly: any;

// Bloc camera_start
Blockly.Blocks['camera_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Démarrer la caméra');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00AEEF');
    this.setTooltip('Démarre le flux vidéo de la caméra');
  }
};

// Bloc camera_stop
Blockly.Blocks['camera_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Arrêter la caméra');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00AEEF');
    this.setTooltip('Arrête le flux vidéo de la caméra');
  }
}; 