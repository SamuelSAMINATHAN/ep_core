import { BlocklyInstance } from '../types';

declare const Blockly: BlocklyInstance;

// Garantir l'existence de Blockly
if (typeof Blockly === 'undefined') {
  console.error('Blockly n\'est pas disponible');
} else {
  // Bloc obtenir variable
  Blockly.Blocks['variables_get'] = {
    init: function() {
      this.setColour(Blockly.Msg.VARIABLES_HUE || '#A55B5B');
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable('item'), 'VAR');
      this.setOutput(true);
    }
  };

  // Bloc définir variable
  Blockly.Blocks['variables_set'] = {
    init: function() {
      this.setColour(Blockly.Msg.VARIABLES_HUE || '#A55B5B');
      this.appendValueInput('VALUE')
          .appendField('définir')
          .appendField(new Blockly.FieldVariable('item'), 'VAR')
          .appendField('à');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };
} 