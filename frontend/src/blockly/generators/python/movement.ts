export {};

declare const Blockly: any;

if (Blockly && Blockly.Python) {
  const Python = Blockly.Python;

  // Générateur pour avancer
  Python['move_forward'] = function(block: any) {
    const distance = Python.valueToCode(block, 'DISTANCE', Python.ORDER_ATOMIC) || '0';
    Python.definitions_['import_robomaster'] = 'from robomaster import robot';
    return `ep_robot.chassis.move(x=${distance}, y=0, z=0).wait_for_completed()\n`;
  };

  // Générateur pour reculer
  Python['move_backward'] = function(block: any) {
    const distance = Python.valueToCode(block, 'DISTANCE', Python.ORDER_ATOMIC) || '0';
    Python.definitions_['import_robomaster'] = 'from robomaster import robot';
    return `ep_robot.chassis.move(x=-${distance}, y=0, z=0).wait_for_completed()\n`;
  };

  // Générateur pour tourner à droite
  Python['turn_right'] = function(block: any) {
    const angle = Python.valueToCode(block, 'ANGLE', Python.ORDER_ATOMIC) || '0';
    Python.definitions_['import_robomaster'] = 'from robomaster import robot';
    return `ep_robot.chassis.move(x=0, y=0, z=-${angle}).wait_for_completed()\n`;
  };

  // Générateur pour tourner à gauche
  Python['turn_left'] = function(block: any) {
    const angle = Python.valueToCode(block, 'ANGLE', Python.ORDER_ATOMIC) || '0';
    Python.definitions_['import_robomaster'] = 'from robomaster import robot';
    return `ep_robot.chassis.move(x=0, y=0, z=${angle}).wait_for_completed()\n`;
  };

  // Générateur pour arrêter
  Python['stop'] = function(block: any) {
    Python.definitions_['import_robomaster'] = 'from robomaster import robot';
    return 'ep_robot.chassis.drive_speed(x=0, y=0, z=0)\n';
  };
} 