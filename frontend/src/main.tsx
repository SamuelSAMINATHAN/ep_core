// Import notre adaptateur pour s'assurer qu'il est initialisé
import './blockly/components-adapter';

// Imports React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Fonction pour vérifier si Blockly est chargé
function isBlocklyReady() {
  return (
    typeof window !== 'undefined' && 
    window.Blockly && 
    window.Blockly.Blocks && 
    window.Blockly.Python
  );
}

// Fonction pour initialiser l'application React
function initializeApp() {
  console.log('Initialisation de l\'application React');
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('Application React rendue avec succès');
  } else {
    console.error('Élément root non trouvé');
  }
}

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM chargé, vérification de Blockly...');
  
  // Attendre que Blockly soit complètement chargé depuis le CDN
  let attempts = 0;
  const maxAttempts = 20; // 2 secondes maximum
  
  function checkBlocklyAndInitialize() {
    if (isBlocklyReady()) {
      console.log('Blockly est correctement chargé');
      initializeApp();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(checkBlocklyAndInitialize, 100);
      console.log(`Attente de Blockly... (${attempts}/${maxAttempts})`);
    } else {
      console.error('Blockly n\'a pas pu être chargé correctement. Démarrage de l\'application quand même...');
      initializeApp();
    }
  }
  
  checkBlocklyAndInitialize();
});
