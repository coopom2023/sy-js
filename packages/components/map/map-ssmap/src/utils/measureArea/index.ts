import type {
  RgbaColor,
  MeasureAreaOption,
  SSmapWindow,
  Viewer,
  BillboardCollection,
  FrameAction,
  Polyline3D,
  Polygon3D,
  Vector3,
} from '../../types'
import calcArea from './calcArea'

const circlePng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB/klEQVRIS71WO1LjQBB9Tz4AG4IcLJuaAAghIYRsTQAppvABUPkAtg8AXABqvSkEazJDBAkOMYFJIcFFaB9A01RLlpCQZWRXaSeaqunu17953cSUI4uLyyB/i2WVIaL3ZU9cpAdySGPaELnm+/trmhlOelDDxrLqJCvTHAjeRKRlGdOcBJQAENsuC/kHwI8sxiMyQ4occjBoR/ViAFIsVgRQ43MfAod8e2sFBkKAVOOlErC9DW5sACsrvl6/D+l2gZsb4Pk54QxFdoNIPADNuRQKj4m0HB2BzWZ6NKMR5PQUuLj4KjOk665rTTwA17ZbJA9iuTs/B3Z2sqWq04FUqzFZEflbGAwqHHv/Env9zvMJsFKvJyKh6/6iLC0di2WdhTqlEnh7m83zqJSma28vVhMa49AUi3cAtkJZxwFrtdkBtJYnJ8DZp68A7mls+xXkz7CtLi+Bzc25APDwANnf/9QV6WkEEituvw8sLMwHoGkKWnls4T8A5Jki4Cn/Ik9s06ur2euQ1qa5f7TcqSJCdj0A8f6sVkHHSU+XpkU/lvJW/Izoumsh2Xkg/qD5l/gASh1KekrXSt16lKK7XUink42uA6O5DpwQxI9EJ9Ks33lEkcrUkRmC+EO/8XVGpPGHcr9lTCPT0I8aGa8tZW9t8ZeA1fH7E4BgbWlPW1s+AHk2DlsBVE++AAAAAElFTkSuQmCC'

function createPolyline3D(alpha?: number, color?: RgbaColor, lineHeight?: number) {
  const win = window as unknown as SSmapWindow
  const p3 = new win.SSmap.Polyline3D()
  p3.objectName = 'Polyline3D'
  p3.alpha = alpha !== undefined && Number.isFinite(alpha) ? alpha : 1
  p3.setWidth(lineHeight || 2.5)
  if (color) {
    p3.color = win.SSmap.Color.fromRgb(color.red, color.green, color.blue, color.alpha)
  } else {
    p3.color = win.SSmap.Color.fromRgb(252, 20, 20, 255)
  }
  p3.setAltitudeMethod(win.SSmap.AltitudeMethod.Absolute)
  return p3
}

function createPolygon3D(alpha?: number, color?: RgbaColor, fillColor?: RgbaColor, fillAlpha?: number) {
  const win = window as unknown as SSmapWindow
  const p3 = new win.SSmap.Polygon3D()
  p3.objectName = 'Polygon3D'
  // 线颜色
  if (color) {
    p3.color = win.SSmap.Color.fromRgb(color.red, color.green, color.blue, color.alpha)
  } else {
    p3.color = win.SSmap.Color.fromRgb(0, 0, 0, 128)
  }
  // 线透明度
  p3.alpha = alpha !== undefined && Number.isFinite(alpha) ? alpha : 1
  // p3.alpha = 0.5
  p3.fillAlpha = fillAlpha !== undefined && Number.isFinite(fillAlpha) ? fillAlpha : 0.6
  if (fillColor) {
    p3.setFillColor(win.SSmap.Color.fromRgb(fillColor.red, fillColor.green, fillColor.blue, fillColor.alpha))
  } else {
    p3.setFillColor(win.SSmap.Color.fromRgb(255, 255, 255, 56))
  }
  return p3
}

function createBillboardEntity(point: Vector3) {
  const win = window as unknown as SSmapWindow
  const bbe = new win.SSmap.BillboardEntity()
  bbe.position = point
  bbe.url = circlePng
  bbe.imageWidth = 10
  bbe.imageHeight = 10
  return bbe
}

function getCenterPoint(pointArray: Vector3[]) {
  const win = window as unknown as SSmapWindow
  const lonlist: number[] = []
  const latlist: number[] = []
  const heightList: number[] = []
  pointArray.forEach((item: Vector3) => {
    const point = item.toCartographic().toDegrees()
    lonlist.push(point.longitude)
    latlist.push(point.latitude)
    heightList.push(point.height)
  })
  const minlon = Math.min(...lonlist)
  const maxlon = Math.max(...lonlist)
  const minlat = Math.min(...latlist)
  const maxlat = Math.max(...latlist)
  const minHeight = Math.min(...heightList)
  const maxHeight = Math.max(...heightList)
  const longitude = (minlon + maxlon) / 2
  const latitude = (minlat + maxlat) / 2
  const height = (minHeight + maxHeight) / 2
  const point = win.SSmap.Cartographic.fromDegrees(longitude, latitude, height)
  return point.toVector3()
}

export function measureArea(viewer: Viewer, options?: MeasureAreaOption) {
  if (!viewer || !viewer.canvasEl) return
  const win = window as unknown as SSmapWindow
  let tipEl: HTMLDivElement | undefined
  if (!options || options.showTips !== false) {
    tipEl = document.createElement('div')
    tipEl.innerText = '左键获取，右键结束'
    tipEl.style.position = 'absolute'
    tipEl.style.left = '0'
    tipEl.style.top = '0'
    tipEl.style.display = 'none'
    tipEl.style.padding = '3px 6px'
    tipEl.style.color = '#fff'
    tipEl.style.backgroundColor = 'rgba(20, 20, 20, 0.6)'
    tipEl.style.fontSize = '12px'
    document.body.appendChild(tipEl)
  }
  const scene = viewer.scene
  const mainCamera = scene.mainCamera
  let isDown = false
  let scopeBbCollection: BillboardCollection | undefined
  let scopeBbCollectionList: BillboardCollection[] = []
  let scopePoints: Vector3[] = []
  let scopePolyline3d: Polyline3D | undefined
  let scopePolyline3dList: Polyline3D[] = []
  let scopePolygon3d: Polygon3D | undefined
  let scopePolygon3dList: Polygon3D[] = []
  let scopeFrameAction: FrameAction | undefined
  let scopeCenterLabel: HTMLDivElement | undefined
  const mouseMove = function(ev: MouseEvent) {
    if (!isDown) return
    if (tipEl) {
      tipEl.style.display = 'block'
      tipEl.style.top = `${ev.y + 5}px`
      tipEl.style.left = `${ev.x + 5}px`
    }
    if (scopePoints.length > 0) {
      const ray = mainCamera.screenPointToRay(ev.x, ev.y)
      const hit = new win.SSmap.RaycastHit()
      if (scene.raycast(ray, hit)) {
        const point = hit.point
        // lineTo绘制动态点，只取最后一次调用坐标
        if (scopePolyline3d) scopePolyline3d.lineTo(point)
        // 绘制多边形
        if (scopePoints.length > 1) {
          //清除移动鼠标上一次绘制的多边形
          if (scopePolygon3d) {
            scopePolygon3d.delete()
            scopePolygon3d = undefined
          }
          //绘制新的多边形
          scopePolygon3d = createPolygon3D(options?.alpha, options?.color, options?.fillColor, options?.fillAlpha)
          scopePoints.forEach((item) => {
            if (scopePolygon3d) scopePolygon3d.addPoint(item)
          })
          if (point) {
            scopePolygon3d.addPoint(point)
          }
          scopePolygon3d.draw()
          scopePolygon3d.end()
        }
      }
      hit.delete()
    }
  }
  const mouseDown = function(ev: MouseEvent) {
    if (ev.button === 0) {
      // 左键
      isDown = true
      const ray = mainCamera.screenPointToRay(ev.x, ev.y)
      const hit = new win.SSmap.RaycastHit()
      if (scene.raycast(ray, hit)) {
        const point = win.SSmap.Vector3.create(hit.point.x, hit.point.y, hit.point.z)
        // 绘制连接线
        if (!scopePolyline3d) {
          scopePolyline3d = createPolyline3D(options?.alpha, options?.lineColor, options?.lineWidth)
          scopePolyline3dList.push(scopePolyline3d)
        }
        scopePolyline3d.addPoint(point)
        // 绘制鼠标单击圆点
        const bbe = createBillboardEntity(point)
        if (!scopeBbCollection) {
          scopeBbCollection = new win.SSmap.BillboardCollection()
          scopeBbCollectionList.push(scopeBbCollection)
        }
        bbe.setCollection(scopeBbCollection)
        scopePoints.push(point)
      }
      hit.delete()
    }
    if (ev.button === 2 && isDown) {
      // 右键
      isDown = false
      document.removeEventListener('mousemove', mouseMove, false)
      if (scopePoints.length >= 3) {
        const point = scopePoints[0]
        if (scopePolyline3d) {
          scopePolyline3d.addPoint(point)
          scopePolyline3d.draw()
          scopePolyline3d.end()
        }
        if (scopePolygon3d) {
          scopePolygon3d.delete()
        }
        scopePolygon3d = createPolygon3D(options?.alpha, options?.color, options?.fillColor, options?.fillAlpha)
        scopePoints.forEach(p => {
          if (scopePolygon3d) scopePolygon3d.addPoint(p)
        })
        if (point) {
          scopePolygon3d.addPoint(point)
        }
        scopePolygon3d.draw()
        scopePolygon3d.end()
        // 收集绘图对象
        scopePolygon3dList.push(scopePolygon3d)
        scopePolygon3d = undefined
        // 计算多边形面积
        const area = calcArea(scopePoints)
        // 计算多边形中心点
        const centerPoint = getCenterPoint(scopePoints)
        scopeFrameAction = new win.SSmap.FrameAction()
        scopeFrameAction.onTriggered(() => {
          const screenPoint = mainCamera.worldToScreenPoint(centerPoint)
          if (!scopeCenterLabel) {
            scopeCenterLabel = document.createElement('div')
            scopeCenterLabel.style.cssText = `
              position: absolute;
              max-width: 180px;
              border-radius: 8px;
              padding: 10px;
              z-index: 0;
              font-size: 14px;
              line-height: 1.4;
              min-width: 50px;
              word-wrap: break-word;
              background: #2eb7c0;
              color: #fff;
              text-align: justify;
              cursor:pointer;
            `
            scopeCenterLabel.innerHTML = ` 面积：${area.toFixed(1)}m² `
            document.body.appendChild(scopeCenterLabel)
          }
          scopeCenterLabel.style.left = `${parseInt(String(screenPoint.x - scopeCenterLabel.clientWidth / 2))}px`
          scopeCenterLabel.style.top = `${parseInt(String(screenPoint.y - scopeCenterLabel.clientHeight - 15))}px`
        })
        scene.rootEntity.addComponent(scopeFrameAction)
      }
  
      scopeBbCollectionList.forEach(x => x.delete && x.delete())
      scopeBbCollectionList = []
      scopePolyline3d = undefined
      if (tipEl) {
        tipEl.parentElement?.removeChild(tipEl)
        tipEl = undefined
      }
      if (!viewer.canvasEl) return
      viewer.canvasEl.removeEventListener('mousedown', mouseDown, false)
      viewer.canvasEl.style.cursor = ''
    }
  }
  viewer.canvasEl.addEventListener('mousedown', mouseDown, false)
  viewer.canvasEl.style.cursor = 'crosshair'
  document.addEventListener('mousemove', mouseMove, false)
  return () => {
    document.removeEventListener('mousemove', mouseMove, false)
    if (viewer.canvasEl) {
      viewer.canvasEl.removeEventListener('mousedown', mouseDown, false)
      viewer.canvasEl.style.cursor = ''
    }
    if (tipEl) {
      tipEl.parentElement?.removeChild(tipEl)
      tipEl = undefined
    }
    if (scopeBbCollectionList && scopeBbCollectionList.length > 0) {
      scopeBbCollectionList.forEach(x => x.delete && x.delete())
      scopeBbCollectionList = []
    }
    if (scopePolygon3d) {
      scopePolygon3d.delete()
      scopePolygon3d = undefined
    }
    if (scopePoints && scopePoints.length > 0) {
      scopePoints.forEach(x => x.delete && x.delete())
      scopePoints = []
    }
    // if (scopePolyline3d) {
    //   scopePolyline3d.delete && scopePolyline3d.delete()
    //   scopePolyline3d = undefined
    // }
    if (scopePolyline3dList && scopePolyline3dList.length > 0) {
      scopePolyline3dList.forEach(x => x.delete && x.delete())
      scopePolyline3dList = []
    }
    if (scopeFrameAction) {
      scopeFrameAction.delete()
      scopeFrameAction = undefined
    }
    if (scopeCenterLabel) {
      scopeCenterLabel.parentElement?.removeChild(scopeCenterLabel)
      scopeCenterLabel = undefined
    }
    if (scopePolygon3dList && scopePolygon3dList.length > 0) {
      scopePolygon3dList.forEach(x => x.delete && x.delete())
      scopePolygon3dList = []
    }
  }
}
