// Types pour les blocs Blockly
export interface BlocklyBlock {
  getFieldValue: (name: string) => string;
  itemCount_?: number;
  elseifCount_?: number;
  elseCount_?: number;
  setColour: (color: string) => void;
  appendDummyInput: () => any;
  appendValueInput: (name: string) => any;
  appendStatementInput: (name: string) => any;
  setCheck: (type: string | string[] | null) => any;
  setPreviousStatement: (state: boolean, type?: string | string[] | null) => void;
  setNextStatement: (state: boolean, type?: string | string[] | null) => void;
  setOutput: (state: boolean, type?: string | string[] | null) => void;
  setInputsInline: (state: boolean) => void;
  setTooltip: (tooltip: string) => void;
}

// Types pour Python
export interface BlocklyField {
  name: string;
  value: any;
}

export interface BlocklyPython {
  ORDER_ATOMIC: number;
  ORDER_NONE: number;
  ORDER_FUNCTION_CALL: number;
  ORDER_MULTIPLICATIVE: number;
  ORDER_ADDITIVE: number;
  ORDER_RELATIONAL: number;
  ORDER_UNARY_SIGN: number;
  ORDER_LOGICAL_AND: number;
  ORDER_EXPONENTIATION: number;
  PASS: string;
  valueToCode: (block: BlocklyBlock, name: string, order: number) => string;
  statementToCode: (block: BlocklyBlock, name: string) => string;
  variableDB_: {
    getName: (name: string, type: string) => string;
    getDistinctName: (name: string, type: string) => string;
  };
  definitions_: { [key: string]: string };
  nameDB_: {
    getName: (name: string, type: string) => string;
    getDistinctName: (name: string, type: string) => string;
  };
  prefixLines: (code: string, prefix: string) => string;
  [key: string]: any; // Permettre l'indexation dynamique pour les générateurs
}

// Types pour Blockly global
export interface BlocklyInstance {
  Python: BlocklyPython;
  VARIABLE_CATEGORY_NAME: string;
  Variables: {
    NAME_TYPE: string;
  };
  Msg: {
    VARIABLES_HUE: string;
    [key: string]: any;
  };
  setLocale: (locale: any) => void;
  Blocks: {
    [key: string]: {
      init: () => void;
      [key: string]: any;
    };
  };
  FieldDropdown: new(options: Array<[string, string]>) => any;
  FieldNumber: new(value: number) => any;
  FieldVariable: new(varName: string) => any;
  inject: (container: HTMLElement, options: any) => any;
  Xml: {
    textToDom: (text: string) => Element;
    domToWorkspace: (dom: Element, workspace: any) => void;
  };
  PROCEDURE_CATEGORY_NAME: string;
  [key: string]: any;
} 