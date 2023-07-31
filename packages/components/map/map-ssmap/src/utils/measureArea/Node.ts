export default class Node {
  private i: number
  private x: number
  private y: number
  z: number | null
  prev: Node | null
  next: Node | null
  prevZ: Node | null
  nextZ: Node | null
  private steiner: boolean

  constructor(i: number, x: number, y: number) {
    // vertex index in coordinates array
    this.i = i
    // vertex coordinates
    this.x = x
    this.y = y
    // previous and next vertex nodes in a polygon ring
    this.prev = null
    this.next = null
    // z-order curve value
    this.z = null
    // previous and next nodes in z-order
    this.prevZ = null
    this.nextZ = null
    // indicates whether this is a steiner point
    this.steiner = false
  }
}

/**
 * create a node and optionally link it with previous one (in a circular doubly linked list)
 * @param {number} i i
 * @param {number} x x
 * @param {number} y y
 * @param {object} last last
 * @returns {Node} new Node
 */
export function insertNode(i: number, x: number, y: number, last?: Node | null): Node {
  const p = new Node(i, x, y)
  if (!last) {
    p.prev = p
    p.next = p
  } else {
    p.next = last.next
    p.prev = last
    if (last.next) {
      last.next.prev = p
    }
    last.next = p
  }
  return p
}

/**
 * remove node
 * @param {Node} p p
 */
export function removeNode(p: Node) {
  if (p.next) {
    p.next.prev = p.prev
  }
  if (p.prev) {
    p.prev.next = p.next
  }

  if (p.prevZ) p.prevZ.nextZ = p.nextZ
  if (p.nextZ) p.nextZ.prevZ = p.prevZ
}

/**
 * Simon Tatham's linked list merge sort algorithm
 * @link http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
 * @param list 
 * @returns 
 */
export function sortLinked(list: Node | null) {
  let i
  let p
  let q
  let e
  let tail
  let numMerges
  let pSize
  let qSize
  let inSize = 1

  do {
    p = list
    list = null
    tail = null
    numMerges = 0

    while (p) {
      numMerges++
      q = p
      pSize = 0
      for (i = 0; i < inSize; i++) {
        pSize++
        q = q.nextZ
        if (!q) break
      }
      qSize = inSize

      while (pSize > 0 || (qSize > 0 && q)) {
        if (pSize !== 0 && (qSize === 0 || !q || (p && q && p.z !== null && q.z !== null && p.z <= q.z))) {
          e = p
          if (p) {
            p = p.nextZ
          }
          pSize--
        } else {
          e = q
          if (q) {
            q = q.nextZ
          }
          qSize--
        }

        if (tail) {
          tail.nextZ = e
        } else {
          list = e
        }

        if (e) {
          e.prevZ = tail
        }
        tail = e
      }

      p = q
    }

    if (tail) {
      tail.nextZ = null
    }
    inSize *= 2
  } while (numMerges > 1)

  return list
}

export function equals(p1: any, p2: any) {
  return p1.x === p2.x && p1.y === p2.y
}

export function signedArea(data: any[], start: number, end: number, dim: number) {
  let sum = 0
  for (let i = start, j = end - dim; i < end; i += dim) {
    sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1])
    j = i
  }
  return sum
}

/**
 * create a circular doubly linked list from polygon points in the specified winding order
 * @param {object} data data
 * @param {number} start start
 * @param {number} end end
 * @param {number} dim dim
 * @param {boolean} clockwise clockwise
 * @returns {Node} Node
 */
export function linkedList(data: number[], start: number, end: number, dim: number, clockwise: boolean): Node | null {
  let i: number
  let last: Node | null = null

  if (clockwise === signedArea(data, start, end, dim) > 0) {
    for (i = start; i < end; i += dim) {
      last = insertNode(i, data[i], data[i + 1], last)
    }
  } else {
    for (i = end - dim; i >= start; i -= dim) {
      last = insertNode(i, data[i], data[i + 1], last)
    }
  }

  if (last && equals(last, last.next)) {
    removeNode(last)
    last = last.next
  }

  return last
}
