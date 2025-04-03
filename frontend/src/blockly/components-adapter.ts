/**
 * Ce fichier sert d'adaptateur entre la version Blockly chargée depuis le CDN
 * et les composants React qui l'utilisent
 */

// Types pour Blockly global
declare global {
  interface Window {
    Blockly: any;
  }
}

// Accès à Blockly depuis window
export const Blockly = window.Blockly;

// Export de la toolbox pour les composants
export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Mouvement',
      colour: '#5CA65C',
      contents: [
        { kind: 'block', type: 'move_forward' },
        { kind: 'block', type: 'move_backward' },
        { kind: 'block', type: 'turn_right' },
        { kind: 'block', type: 'turn_left' },
        { kind: 'block', type: 'stop' }
      ]
    },
    {
      kind: 'category',
      name: 'Chassis',
      colour: '#70A65C',
      contents: [
        { kind: 'block', type: 'chassis_move' },
        { kind: 'block', type: 'chassis_stop' },
        { kind: 'block', type: 'chassis_set_speed' },
        { kind: 'block', type: 'chassis_set_pwm' },
        { kind: 'block', type: 'chassis_set_accelerator' },
        { kind: 'block', type: 'chassis_follow_gimbal' }
      ]
    },
    {
      kind: 'category',
      name: 'LED',
      colour: '#33CC33',
      contents: [
        { kind: 'block', type: 'led_set_chassis_color' },
        { kind: 'block', type: 'led_turn_off' }
      ]
    },
    {
      kind: 'category',
      name: 'Logique',
      colour: '#5B80A5',
      contents: [
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_ifelse' },
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_boolean' }
      ]
    },
    {
      kind: 'category',
      name: 'Boucles',
      colour: '#5BA55B',
      contents: [
        { kind: 'block', type: 'controls_repeat_ext' },
        { kind: 'block', type: 'controls_whileUntil' },
        { kind: 'block', type: 'controls_for' }
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '#5B67A5',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' }
      ]
    },
    {
      kind: 'category',
      name: 'Variables',
      custom: 'VARIABLE',
      colour: '%{BKY_VARIABLES_HUE}'
    }
  ]
};

// Vérifier si Blockly est disponible
export function isBlocklyAvailable(): boolean {
  return typeof window !== 'undefined' && !!window.Blockly;
}

// Fonction pour créer un workspace
export function createWorkspace(container: HTMLElement, options: any) {
  if (!isBlocklyAvailable()) {
    throw new Error('Blockly n\'est pas disponible');
  }
  
  return Blockly.inject(container, {
    ...options,
    toolbox: toolbox
  });
}

// Fonctions utilitaires pour générer du code Python
export function generatePythonCode(workspace: any): string {
  if (!isBlocklyAvailable() || !Blockly.Python) {
    throw new Error('Blockly Python n\'est pas disponible');
  }
  
  return Blockly.Python.workspaceToCode(workspace);
}

// Fonctions utilitaires pour XML
export function workspaceToXml(workspace: any): string {
  if (!isBlocklyAvailable() || !Blockly.Xml) {
    throw new Error('Blockly Xml n\'est pas disponible');
  }
  
  const xml = Blockly.Xml.workspaceToDom(workspace);
  return Blockly.Xml.domToText(xml);
}

export function xmlToWorkspace(xmlText: string, workspace: any): void {
  if (!isBlocklyAvailable() || !Blockly.Xml) {
    throw new Error('Blockly Xml n\'est pas disponible');
  }
  
  const xml = Blockly.Xml.textToDom(xmlText);
  Blockly.Xml.domToWorkspace(xml, workspace);
} 