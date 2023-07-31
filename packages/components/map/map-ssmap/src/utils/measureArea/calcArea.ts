import { earcut } from './earcut'

function triangulation(pointArray: any[]) {
  const vec3 = []
  for (let i = 0; i < pointArray.length; i++) {
    vec3.push(pointArray[i].x)
    vec3.push(pointArray[i].y)
    vec3.push(pointArray[i].z)
  }
  const originIndices = earcut(vec3, null, 3)
  const indices = new Uint16Array(originIndices.length)
  for (let i = 0; i < originIndices.length; i++) {
    indices[i] = originIndices[i]
  }
  return indices
}

// 海伦公式（三边长求三角形面积）
function calHeron(a: number, b: number, c: number) {
  const p = (a + b + c) / 2
  return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}
// 计算两点边长(vec3)
function calEdge(pointA: any, pointB: any) {
  const x2 = Math.pow(pointA.x - pointB.x, 2)
  const y2 = Math.pow(pointA.y - pointB.y, 2)
  const z2 = Math.pow(pointA.z - pointB.z, 2)
  return Math.sqrt(x2 + y2 + z2)
}
function calcArea(pointArray: any[]) {
  const indices = triangulation(pointArray)
  let s = 0
  for (let i = 0; i < indices.length; i += 3) {
    const idx1 = indices[i]
    const idx2 = indices[i + 1]
    const idx3 = indices[i + 2]
    const point1 = pointArray[idx1]
    const point2 = pointArray[idx2]
    const point3 = pointArray[idx3]
    const edge1 = calEdge(point1, point2)
    const edge2 = calEdge(point2, point3)
    const edge3 = calEdge(point3, point1)
    s += calHeron(edge1, edge2, edge3)
  }
  return s
}

export default calcArea
