import React from 'react';
import { useBlocklyStore } from '../store/BlocklyStore';

const PythonViewer: React.FC = () => {
  const { currentScript } = useBlocklyStore();
  
  return (
    <div className="h-full flex flex-col bg-gray-900">
      <div className="p-2 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Code Python</h2>
      </div>
      
      <div className="flex-1 p-2 overflow-auto">
        <pre className="font-mono text-sm text-green-400">
          {currentScript?.pythonCode || '# Aucun code Python généré'}
        </pre>
      </div>
    </div>
  );
};

export default PythonViewer; 