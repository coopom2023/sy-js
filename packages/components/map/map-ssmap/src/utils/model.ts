import type { ModelOption, SSmapWindow, Viewer } from '../types'

type AddModelResult = {
  model: any;
  entity: any;
}

/**
 * 添加模型
 * @param {object} viewer 地图实例
 * @param {ModelOption} options 配置项
 * @returns 模型信息
 */
export function modelEntityAdd(viewer: Viewer, options: ModelOption): AddModelResult {
  const win = window as unknown as SSmapWindow
  const model = new win.SSmap.Model(options.url)
  const entity = new win.SSmap.Entity()
  entity.addComponent(model)
  viewer.scene.addEntity(entity)
  if (options.srs) {
    model.srs = options.srs
  }
  // 模型位置
  if (!options.srs && options.position) {
    const carto = win.SSmap.Cartographic.fromDegrees(
      options.position.longitude,
      options.position.latitude,
      options.position.height
    )
    model.transform.cartographic = carto
  }
  // 模型偏移
  if (options.offset) {
    model.offset = win.SSmap.Vector3.create(options.offset.x, options.offset.y, options.offset.z)
  }
  // 模型旋转
  if (options.rotation) {
    model.rotation = win.SSmap.Quaternion.fromEulerAngles(options.rotation.x, options.rotation.y, options.rotation.z)
  }
  // 缩放模型
  if (options.scale) {
    model.scale = win.SSmap.Vector3.create(options.scale, options.scale, options.scale)
  }
  
  model.readyPromise.then(() => {
    // 相机定位到模型
    if (options.location) {
      // 条件语句下this指向不为Model对象
      const cameraController = viewer.scene.mainCamera.cameraController()
      const stack = []
      let renderer = null
      stack.push(model.entity)
      while (stack.length) {
        const entity: any = stack.pop()
        if (entity.renderer) {
          renderer = entity.renderer
          break
        }
        const children = entity.childEntities
        for (let i = 0; i < children.size(); i++) {
          stack.push(children.get(i))
        }
      }
      const center = renderer.boundingVolume.center
      const carto = center.toCartographic()
      const height = carto.height
      carto.height += height * 6
      const position = carto.toVector3()

      const offsetX = 0
      const offsetY = -5 * height
      const offsetZ = 0
      const vec3 = win.SSmap.Vector3.create(offsetX, offsetY, offsetZ)
      const localToWorld = viewer.scene.globe.ellipsoid.eastNorthUpToFixedFrame(position.toCartesian3())
      const newPoint = win.SSmap.Matrix4.multiplyByVector3(localToWorld, vec3)
      cameraController.flyTo(newPoint, 2, 0, -45, 0)
    }
  })
  if (options.enabled !== false) model.entity.enabled = true
  return { model, entity }
}

/**
 * 移除模型
 * @param {AddModelResult} instance 模型信息
 * @returns 成功
 */
export function modelEntityRemove(instance: AddModelResult) {
  if (instance.model) {
    if (instance.model.delete) {
      instance.model.delete()
    }
    instance.model = undefined
  }
  if (instance.entity) {
    if (instance.entity.delete) {
      instance.entity.delete()
    }
    instance.entity = undefined
  }
  return true
}
