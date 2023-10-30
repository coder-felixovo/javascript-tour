export class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class SingleLinkedList {

  size = 0

  constructor() {
    this.head = null
  }

  isValidPos(pos) {
    if (typeof pos === "number" && pos % 1 === 0 && pos >= 0) {
      return true
    } else {
      return false
    }
  }

  incrSize() {
    this.size++
  }

  decrSize() {
    this.size--
  }

  traverse() {
    let cur = this.head
    if (cur == null) {
      return null
    } else {
      while (cur) {
        console.log(cur.data)
        cur = cur.next
      }
    }
  }

  /**
   * 将节点添加到链表末尾
   * @param {*} node 节点实例 
   */
  append(node) {
    let cur = this.head
    if (cur == null) {
      this.head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.incrSize()
  }

  /**
   * 将节点添加到链表指定位置, 从0开始, 若不指定pos, 默认添加到链表末尾
   * @param {*} node 节点实例
   * @param {*} pos 位置 e.g.: 0添加到头节点之前
   */
  insert(node, pos) {
    let cur = this.head
    if (cur == null) {
      this.head = node
    } else {
      if (!this.isValidPos(pos)) throw new Error("invalid pos")
      if (pos < 0 || pos > this.size) throw new Error("pos is out of range")
      if (pos == 0) {
        node.next = cur
        this.head = node
      } else {
        let count = 0
        while (count + 1 != pos) {
          cur = cur.next
          count++
        }
        node.next = cur.next
        cur.next = node
      }
    }
    this.incrSize()
  }

  /**
   * 移除链表中第i个元素, 从1开始, 不填则默认移除链表尾的元素
   * @param {*} pos 
   */
  remove(pos) {
    let cur = this.head
    if (cur == null) throw new Error("empty single linked list")
    if (!pos || pos === this.size) {
      while(cur.next.next) {
        cur = cur.next
      }
      cur.next = null
      this.decrSize()
      return true
    }
    if (!this.isValidPos(pos)) throw new Error("invalid pos")
    if (pos === 0) throw new Error("pos is beginning of 1.")
    if (pos > this.size) throw new Error("pos is out of range")
    if (pos === 1) {
      this.head = cur.next
    } else {
      let count = 1
      while (count + 1 !== pos) {
        cur = cur.next
        count++
      }
      let temp = cur.next.next
      cur.next.next = null
      cur.next = temp
    }
    this.decrSize()
    return true
  }

  /**
   * 查找链表中指定位置元素, 从1开始
   * @param {*} pos 
   * @returns 
   */
  find(pos) {
    if (!this.isValidPos(pos)) throw new Error("invalid pos.") 
    if (pos < 1 || pos > this.size) throw new Error("pos is out of range")
    let cur = this.head
    let index = 1
    while (index != pos) {
      cur = cur.next
      index++
    }
    return cur
  }

  /**
   * 清空链表
   */
  clear() {
    this.head = null
  }
}


