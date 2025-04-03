import React, { useEffect } from 'react';
import BlocklyEditor from '../components/BlocklyEditor';
import ControlBar from '../components/ControlBar';
import PythonViewer from '../components/PythonViewer';
import CameraDisplay from '../components/CameraDisplay';
import LogsTerminal from '../components/LogsTerminal';
import { useBlocklyStore } from '../store/BlocklyStore';

const BlocklyPage: React.FC = () => {
  const { 
    currentScript,
    displayMode,
    createNewScript
  } = useBlocklyStore();
  
  // Créer un nouveau script si aucun n'est sélectionné
  useEffect(() => {
    if (!currentScript) {
      createNewScript();
    }
  }, [currentScript, createNewScript]);
  
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Barre de contrôle en haut de la page */}
      <ControlBar />
      
      {/* Zone principale divisée en deux parties */}
      <div className="flex flex-1 overflow-hidden">
        {/* Zone Blockly (gauche) */}
        <div className="w-3/5 h-full">
          <BlocklyEditor />
        </div>
        
        {/* Zone de contenu dynamique (droite) */}
        <div className="w-2/5 h-full flex flex-col">
          {displayMode === 'python' ? (
            /* Affichage du code Python */
            <div className="flex-1">
              <PythonViewer />
            </div>
          ) : (
            /* Affichage de la caméra et des logs */
            <>
              <div className="h-2/3">
                <CameraDisplay />
              </div>
              <div className="h-1/3">
                <LogsTerminal />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlocklyPage; 