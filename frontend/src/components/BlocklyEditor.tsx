import React, { useEffect, useRef, useState } from 'react';
import { Blockly, toolbox, createWorkspace, generatePythonCode, workspaceToXml, xmlToWorkspace } from '../blockly/components-adapter';
import { useBlocklyStore } from '../store/BlocklyStore';

// Styles CSS pour Blockly
const blocklyStyles = `
.blocklyMainBackground {
  stroke: none !important;
}
.blocklyToolboxDiv {
  background-color: #333 !important;
  color: #fff !important;
}
`;

const BlocklyEditor: React.FC = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    currentScript, 
    updateBlocklyXml, 
    updatePythonCode,
    showPythonGenerated
  } = useBlocklyStore();

  // Fonction pour générer le code Python
  const handleGeneratePythonCode = () => {
    if (workspaceRef.current) {
      try {
        const code = generatePythonCode(workspaceRef.current);
        updatePythonCode(code);
      } catch (e) {
        console.error('Erreur lors de la génération du code:', e);
        updatePythonCode('# Erreur: ' + e);
      }
    }
  };

  // Fonction pour sauvegarder l'état en XML
  const saveWorkspaceState = () => {
    if (workspaceRef.current) {
      try {
        const xmlText = workspaceToXml(workspaceRef.current);
        updateBlocklyXml(xmlText);
      } catch (e) {
        console.error('Erreur lors de la sauvegarde:', e);
      }
    }
  };

  // Ajouter les styles CSS
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = blocklyStyles;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Initialiser Blockly
  useEffect(() => {
    if (blocklyDiv.current && !workspaceRef.current) {
      try {
        // Configurer le conteneur
        const container = blocklyDiv.current;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.right = '0';
        container.style.bottom = '0';
        container.style.backgroundColor = '#f9f9f9';
        
        // Injecter Blockly
        workspaceRef.current = createWorkspace(container, {
          grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
          media: '/media/',
          trashcan: true,
          zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
          },
          scrollbars: true
        });
        
        setIsInitialized(true);
        
        // Ajouter l'écouteur de changements
        workspaceRef.current.addChangeListener(() => {
          saveWorkspaceState();
          if (showPythonGenerated) {
            handleGeneratePythonCode();
          }
        });
        
        // Forcer un redimensionnement initial
        setTimeout(() => {
          if (workspaceRef.current?.resize) {
            workspaceRef.current.resize();
          }
        }, 300);
      } catch (error) {
        console.error('Erreur d\'initialisation:', error);
        setError(`Erreur: ${error}`);
      }
    }
  }, [showPythonGenerated]);
  
  // Gérer le redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (workspaceRef.current?.resize) {
        workspaceRef.current.resize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (workspaceRef.current?.dispose) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  // Charger le XML quand le script change
  useEffect(() => {
    if (workspaceRef.current && currentScript?.blocklyXml) {
      try {
        workspaceRef.current.clear();
        xmlToWorkspace(currentScript.blocklyXml, workspaceRef.current);
      } catch (e) {
        console.error('Erreur lors du chargement du XML:', e);
      }
    }
  }, [currentScript?.id]);

  return (
    <div className="blockly-container h-full w-full relative">
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-600 text-white p-2 z-10">
          {error}
        </div>
      )}
      {!isInitialized && !error && (
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white p-2 z-10">
          Initialisation de Blockly en cours...
        </div>
      )}
      <div 
        ref={blocklyDiv} 
        className="blockly-editor"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      ></div>
    </div>
  );
};

export default BlocklyEditor; 