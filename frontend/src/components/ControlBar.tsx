import React from 'react';
import { useBlocklyStore } from '../store/BlocklyStore';
// Remplacer les icônes par des émojis pour éviter de dépendre de react-icons
// import { FaPlay, FaCode, FaVideo, FaSave, FaPlus } from 'react-icons/fa';

const ControlBar: React.FC = () => {
  const { 
    currentScript, 
    setScriptName,
    togglePythonGenerated,
    displayMode,
    setDisplayMode,
    isExecuting,
    setExecuting
  } = useBlocklyStore();

  return (
    <div className="flex justify-between items-center h-14 px-4 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">RoboMaster Blockly</h1>
        {currentScript && (
          <input
            type="text"
            value={currentScript.name}
            onChange={(e) => setScriptName(e.target.value)}
            className="px-2 py-1 bg-gray-700 rounded border border-gray-600 text-white"
          />
        )}
      </div>
      
      <div className="flex space-x-4">
        <button 
          onClick={() => setDisplayMode(displayMode === 'python' ? 'camera_logs' : 'python')}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
        >
          {displayMode === 'python' ? 'Afficher Caméra' : 'Afficher Python'}
        </button>
        
        <button 
          onClick={() => setExecuting(!isExecuting)}
          className={`px-3 py-1 rounded ${isExecuting ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {isExecuting ? 'Arrêter' : 'Exécuter'}
        </button>
      </div>
    </div>
  );
};

export default ControlBar; 