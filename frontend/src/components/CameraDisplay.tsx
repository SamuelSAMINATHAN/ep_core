import React from 'react';

const CameraDisplay: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-gray-900">
      <div className="p-2 bg-gray-800 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Caméra</h2>
      </div>
      
      <div className="flex-1 flex items-center justify-center bg-black">
        <div className="text-gray-500">
          Flux vidéo non disponible - Connectez votre RoboMaster
        </div>
      </div>
    </div>
  );
};

export default CameraDisplay; 