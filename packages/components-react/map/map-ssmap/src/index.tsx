import { useCallback, useEffect, useRef } from 'react'
import { SSmapQtLoader } from '@sy-js/components'
import type { SSmapType } from '@sy-js/components'
export { SSmapUtils } from '@sy-js/components'

export type MapSSmapProps = {
  /**
   * 数生地图文件地址，默认直接使用数生服务，需代理 https://examples.dataarche.com/sdkcode/
   * @example
   * '/sdkcode': {
   *   target: 'https://examples.dataarche.com',
   *   changeOrigin: true,
   * }
   */
  path?: string;
  /**
   * 是否初始化，默认true
   */
  init?: boolean;
  /**
   * 加载完成事件
   * @param viewer 实例
   */
  load?(viewer: SSmapType.Viewer): void;
}

export function MapSSmap(props: MapSSmapProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<SSmapType.Viewer>()

  /** 初始化 */
  const init = useCallback(function(option?: { path: string }) {
    if (!divRef.current) return
    const optionPath = option && option.path ? option.path : ''
    SSmapQtLoader({
      el: divRef.current,
      // path: '/map/ssmap',
      // 直接使用数生地图文件，需代理 https://examples.dataarche.com/sdkcode/
      path: optionPath || (props.path ? props.path : '/sdkcode/'),
    }).then(({ canvas }) => {
      const gv = (window as any).globalViewer as SSmapType.Viewer
      mapRef.current = gv
      gv.canvasEl = canvas
      props.load && props.load(mapRef.current)
    })
  }, [])

  /** 销毁地图 */
  const destroyMap = useCallback(function() {
    const win = window as any
    if (win.Browser) {
      if (win.Browser.mainLoop) {
        win.Browser.mainLoop = {
          runner() {},
          queue: [],
          currentlyRunningMainloop: window.Infinity
        }
      }
    }
    try {
      if (win.exit) win.exit(1)
    } catch (error) {
      win.exit = undefined
    }
    win.ABORT = true
    if (win.globalViewer && win.globalViewer.quit) {
      win.globalViewer.quit()
    }
    if (win.Module) {
      if (win.Module._free) win.Module._free()
    }
    win.globalViewer = undefined
    win.GlobalViewer = undefined
    win.Module = undefined
    win.Browser = undefined
    win.calledRun = undefined
    win.initScene = undefined
    if (divRef.current) {
      divRef.current.innerHTML = ''
    }
    mapRef.current = undefined
  }, [])

  useEffect(() => {
    if (!mapRef.current) {
      if (props.init !== false) {
        init()
      }
    }
    return () => {
      destroyMap()
    }
  }, [])
  return (
    <div className="ssmap" style={{ width: '100%', height: '100%', overflow: 'hidden' }} ref={divRef}></div>
  )
}

export default MapSSmap

export type { SSmapType }
