// Rendre ce fichier un module en ajoutant un export
export {};

// Utiliser l'instance globale de Blockly
declare const Blockly: any;

// Garantir l'existence de Blockly.Python
if (!Blockly || !Blockly.Python) {
  console.error('Blockly ou Blockly.Python n\'est pas disponible. Les générateurs Python ne seront pas enregistrés.');
} else {
  const Python = Blockly.Python;

  // Générateur pour l'ancien bloc init_robot (maintenu pour compatibilité)
  Python['init_robot'] = function(block: any) {
    Python.definitions_['import_robot'] = 'from robomaster import robot';
    return 'ep_robot = robot.Robot()\nep_robot.initialize()\n';
  };
  
  // Générateur pour le bloc robomaster_close
  Python['robomaster_close'] = function(block: any) {
    return 'ep_robot.close()\n';
  };
} 


