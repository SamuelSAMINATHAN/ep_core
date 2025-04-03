export {};
declare const Blockly: any;

// Bloc multimedia_play_sound
Blockly.Blocks['multimedia_play_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jouer l'effet sonore")
        .appendField(new Blockly.FieldDropdown([
          ['salutation', 'greet'],
          ['attaque', 'attack'],
          ['dégât', 'damage'],
          ['défaite', 'defeat'],
          ['victoire', 'victory'],
          ['surprise', 'surprise'],
          ['alerte', 'alert']
        ]), 'SOUND_EFFECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Joue un effet sonore prédéfini (non bloquant)');
  }
};

// Bloc multimedia_play_sound_blocking
Blockly.Blocks['multimedia_play_sound_blocking'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jouer l'effet sonore (bloquant)")
        .appendField(new Blockly.FieldDropdown([
          ['salutation', 'greet'],
          ['attaque', 'attack'],
          ['dégât', 'damage'],
          ['défaite', 'defeat'],
          ['victoire', 'victory'],
          ['surprise', 'surprise'],
          ['alerte', 'alert']
        ]), 'SOUND_EFFECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Joue un effet sonore prédéfini et attend la fin de la lecture');
  }
};

// Bloc multimedia_play_custom_audio
Blockly.Blocks['multimedia_play_custom_audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jouer le fichier audio")
        .appendField(new Blockly.FieldTextInput("fichier.mp3"), 'AUDIO_FILE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Joue un fichier audio personnalisé (non bloquant)');
  }
};

// Bloc multimedia_play_custom_audio_blocking
Blockly.Blocks['multimedia_play_custom_audio_blocking'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jouer le fichier audio (bloquant)")
        .appendField(new Blockly.FieldTextInput("fichier.mp3"), 'AUDIO_FILE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Joue un fichier audio personnalisé et attend la fin de la lecture');
  }
};

// Bloc multimedia_take_photo
Blockly.Blocks['multimedia_take_photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prendre une photo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Prend une photo avec la caméra');
  }
};

// Bloc multimedia_record_video
Blockly.Blocks['multimedia_record_video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['Démarrer', 'start'],
          ['Arrêter', 'stop']
        ]), 'ACTION')
        .appendField("l'enregistrement vidéo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF4500');
    this.setTooltip('Démarre ou arrête l\'enregistrement vidéo');
  }
}; 