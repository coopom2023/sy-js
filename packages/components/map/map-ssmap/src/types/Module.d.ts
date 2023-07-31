/** SSmap 模块 */
export type Module = {
  instantiateWasm?: (imports?: WebAssembly.Imports | undefined, successCallback: (instance: WebAssembly.Instance, wasmModule: WebAssembly.Module | undefined) => void) => {};
  locateFile?: (filename: string) => string;
  print?: (text: string) => void;
  printErr?: (text: string) => void;
  mainScriptUrlOrBlob?: Blob;
  qtCanvasElements?: HTMLCanvasElement[];
  arguments?: any;
  thisProgram?: any;
  quit?: any;
  wasmBinary?: any;
  noExitRuntime?: any;
  /** 默认: 1073741824 */
  INITIAL_MEMORY?: any;
  wasmMemory?: any;
  preloadedImages?: any;
  preloadedAudios?: any;
  onAbort?: any;
  _free?: any;
};
