// Imports des blocs de base
import './blocks/logic';
import './blocks/loops';
import './blocks/math';
import './blocks/variables';


// Imports des blocs personnalisés

import './blocks/movement';
import './blocks/led';
import './blocks/armor';
import './blocks/camera';
import './blocks/chassis';
import './blocks/command';
import './blocks/system';
import './blocks/gimbal';
import './blocks/intelligence';
import './blocks/multimedia';

import './blocks/robotic_arm';
import './blocks/sensor';

// Imports des générateurs Python de base
import './generators/python/logic';
import './generators/python/loops';
import './generators/python/math';
import './generators/python/variables';


// Imports des générateurs Python personnalisés

import './generators/python/movement';
import './generators/python/led';
import './generators/python/armor';
import './generators/python/command';
import './generators/python/chassis';
import './generators/python/multimedia';
import './generators/python/robotic_arm';

import './generators/python/sensor';
import './generators/python/intelligence';

// Import de la toolbox
import { toolbox } from './toolbox';

// Types pour Blockly
declare global {
  interface Window {
    Blockly: any;
    goog: {
      provide: (name: string) => void;
      require: (name: string) => void;
    };
  }
}

// Accès à l'instance Blockly globale chargée depuis le CDN
const Blockly = window.Blockly;

// Fonction pour garantir que les générateurs de base sont définis
function ensureBaseGenerators() {
  if (!Blockly || !Blockly.Python) {
    console.error('Blockly ou Blockly.Python n\'est pas disponible');
    return;
  }

  const Python = Blockly.Python;

  // Définir PASS si non défini
  if (!Python.PASS) {
    Python.PASS = '    pass\n';
  }

  // S'assurer que la locale française est utilisée
  try {
    if (Blockly.setLocale && Blockly.Msg) {
      Blockly.setLocale(Blockly.Msg);
      console.log('Blockly configuré en français');
    }
  } catch (e) {
    console.error('Erreur lors de la configuration de la langue:', e);
  }
}

// S'assurer que tous les générateurs sont définis avant d'exporter
if (Blockly) {
  ensureBaseGenerators();
  console.log('Blockly initialisé avec succès');
} else {
  console.error('Blockly n\'est pas disponible. Vérifiez que le script est correctement chargé.');
}

export { Blockly, toolbox }; 