import React from 'react';

const LogsTerminal: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-gray-900">
      <div className="p-1 bg-gray-800 border-b border-gray-700">
        <h2 className="text-sm font-semibold">Logs d'exécution</h2>
      </div>
      
      <div className="flex-1 p-2 overflow-auto">
        <pre className="font-mono text-xs text-gray-400">
          &gt; Application initialisée
          <br/>&gt; Blockly chargé avec succès
          <br/>&gt; En attente de commandes...
        </pre>
      </div>
    </div>
  );
};

export default LogsTerminal; 