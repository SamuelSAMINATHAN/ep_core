import { create } from 'zustand';

export interface Script {
  id: string;
  name: string;
  blocklyXml: string;
  pythonCode: string;
  modified: boolean;
}

export type DisplayMode = 'camera_logs' | 'python';

interface BlocklyState {
  // État principal
  currentScript: Script | null;
  displayMode: DisplayMode;
  isExecuting: boolean;
  showPythonGenerated: boolean;
  
  // Actions
  setCurrentScript: (script: Script | null) => void;
  updateBlocklyXml: (xml: string) => void;
  updatePythonCode: (code: string) => void;
  setScriptName: (name: string) => void;
  setDisplayMode: (mode: DisplayMode) => void;
  setExecuting: (isExecuting: boolean) => void;
  togglePythonGenerated: () => void;
  createNewScript: () => void;
}

export const useBlocklyStore = create<BlocklyState>((set) => ({
  // État initial
  currentScript: null,
  displayMode: 'camera_logs',
  isExecuting: false,
  showPythonGenerated: false,

  // Actions
  setCurrentScript: (script: Script | null) => set({ currentScript: script }),
  
  updateBlocklyXml: (xml: string) => set((state) => ({
    currentScript: state.currentScript 
      ? { ...state.currentScript, blocklyXml: xml, modified: true } 
      : null
  })),
  
  updatePythonCode: (code: string) => set((state) => ({
    currentScript: state.currentScript 
      ? { ...state.currentScript, pythonCode: code, modified: true } 
      : null
  })),
  
  setScriptName: (name: string) => set((state) => ({
    currentScript: state.currentScript 
      ? { ...state.currentScript, name, modified: true } 
      : null
  })),
  
  setDisplayMode: (mode: DisplayMode) => set({ displayMode: mode }),
  
  setExecuting: (isExecuting: boolean) => set({ isExecuting }),
  
  togglePythonGenerated: () => set((state) => ({ 
    showPythonGenerated: !state.showPythonGenerated,
    displayMode: !state.showPythonGenerated ? 'python' : state.displayMode
  })),
  
  createNewScript: () => set({
    currentScript: {
      id: Date.now().toString(),
      name: 'Nouveau script',
      blocklyXml: '',
      pythonCode: '',
      modified: false
    }
  })
})); 