import { request } from '@sy-js/utils'
import type { Module, SSmapWindow } from '../types'

/** 是否支持 webgl */
function webGLSupported() {
  // We expect that WebGL is supported if WebAssembly is; however
  // the GPU may be blacklisted.
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}

/** 打印错误 */
function printError(text: string, el: HTMLElement) {
  const span = document.createElement('span')
  span.innerText = text
  span.style.position = 'absolute'
  span.style.left = '50%'
  span.style.top = '2.5em'
  span.style.transform = 'translateX(-50%)'
  span.style.display = 'flex'
  span.style.flexDirection = 'column'
  span.style.alignItems = 'center'
  span.style.lineHeight = '1.5'
  el.appendChild(span)
  console.error(text)
}

function fetchResource(filePath: string, basePath: string) {
  const fullPath = basePath + filePath
  return fetch(fullPath).then(function (response) {
    if (response.ok) {
      return response
    }
  })
}

function fetchText(filePath: string, basePath: string) {
  return fetchResource(filePath, basePath).then(function (response) {
    return response && response.text()
  })
}

function fetchThenCompileWasm(response: Response) {
  return response.arrayBuffer().then(function (data) {
    return WebAssembly.compile(data)
  })
}

function fetchCompileWasm(filePath: string, basePath: string) {
  return fetchResource(filePath, basePath).then(function (response) {
    if (typeof WebAssembly.compileStreaming !== 'undefined' && response) {
      return WebAssembly.compileStreaming(response).catch(
        function () {
          return fetchThenCompileWasm(response)
        }
      )
    }
    if (response) return fetchThenCompileWasm(response)
  })
}

type LoaderConfig = {
  /** 指定元素渲染地图 */
  el: HTMLElement;
  /** ssmap引擎路径 */
  path?: string;
  canvas?: HTMLCanvasElement;
  stdoutEnabled?: boolean;
  stderrEnabled?: boolean;
}

async function wasmLoader(config: LoaderConfig): Promise<{ canvas: HTMLCanvasElement}> {
  const consoleLog = console.log
  const globalModule: Module = {}
  const win = window as unknown as SSmapWindow
  win.Module = globalModule

  if (!config.el || typeof config.el != 'object') {
    throw new Error('挂载元素不能为空')
  }
  let workerUrl: string | undefined
  const canvas = document.createElement('canvas')
  canvas.id = 'qtcanvas'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.oncontextmenu = function (e) {
    e.preventDefault()
  }
  config.el.appendChild(canvas)
  config.canvas = canvas
  if (config.path === undefined) {
    // config.path = 'assets'
    config.path = '/map/ssmap'
  }
  if (config.path.length > 0 && !config.path.endsWith('/')) {
    config.path = config.path.concat('/')
  }

  function completeLoadEmscriptenModule(emscriptenModuleSource: string | undefined, wasmModule: WebAssembly.Module | undefined) {
    globalModule.instantiateWasm = (imports, successCallback) => {
      if (!wasmModule) return {}
      WebAssembly.instantiate(wasmModule, imports).then(instance => {
        // shapeders.pak, 19727064, right2: 4931768, url: 19727280
        // msyh.ttc,      19728696, right2: 4932176, url: 19728912
        console.log = () => {}
        successCallback(instance, wasmModule)
      })
      return {}
    }
    globalModule.locateFile = globalModule.locateFile || function (filename: string) {
      if (filename === 'SSmap.worker.js' && workerUrl) return workerUrl
      return config.path + filename
    }
    globalModule.print = globalModule.print || function (text: string) {
      if (config.stdoutEnabled) console.log(text)
    }
    globalModule.printErr = globalModule.printErr || function (text) {
      if (text.startsWith !== undefined && text.startsWith('bad name in getProcAddress:')) {
        return
      }
      if (config.stderrEnabled) console.log(text)
    }

    globalModule.qtCanvasElements = config.canvas ? [config.canvas] : []
    if (emscriptenModuleSource) {
      globalModule.mainScriptUrlOrBlob = new Blob([emscriptenModuleSource], { type: 'text/javascript' })
      self.eval(emscriptenModuleSource)
    }
  }

  async function loadEmscriptenModule(applicationName: string) {
    let msg = 'Error: '
    if (typeof WebAssembly === 'undefined') {
      msg += 'WebAssembly is not supported'
      printError(msg, config.el)
      return
    }
    if (!webGLSupported()) {
      msg += 'WebGL is not supported'
      printError(msg, config.el)
      return
    }

    const emscriptenModuleSource = await fetchText(applicationName + '.js', config.path || '')
    const wasmModule = await fetchCompileWasm(applicationName + '.wasm', config.path || '')
    try {
      const text = await request.getText(`${config.path || ''}/SSmap.worker.js`.replace('//', '/'))
      workerUrl = window.URL.createObjectURL(new Blob([text], { type: 'text/javascript' }))
    } catch (error) {
      workerUrl = undefined
    }
    try {
      completeLoadEmscriptenModule(emscriptenModuleSource, wasmModule)
    } catch (error: any) {
      msg += error.message
      printError(msg, config.el)
    }
  }

  const GlobalViewer = new Promise<{ canvas: HTMLCanvasElement }>((revsole: (obj: { canvas: HTMLCanvasElement }) => void) => {
    win.initScene = function () {
      // window.GlobalViewer.canvasEl = canvas
      // revsole([window.SSmap, window.GlobalViewer])
      console.log = consoleLog
      revsole({ canvas })
    }
  })

  loadEmscriptenModule('SSmap')

  return GlobalViewer
}

export default wasmLoader
