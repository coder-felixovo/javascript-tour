class Node {

  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

}

export class DoubleLinkedList {

  posOutOfRangMsg = "pos is out of range."

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Add an element at the end of the double linked list.
   * @param {*} data
   */
  append(data) {
    let node = new Node(data)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  /**
   * Add an element to the specified position of the double linked list.
   * @param {*} data
   * @param {*} pos index
   */
  insert(data, pos) {
    if (pos < 0 || pos > this.length) {
      throw new Error(this.posOutOfRangMsg)
    }
    let node = new Node(data)
    if (pos === this.length) {
      this.append(data)
    } else if (pos === 0) {
      node.next = this.head
      this.head.prev = node
      this.head = node
      this.length++
    } else {
      let index = 0
      let cur = this.head
      let prev = null
      while (index < pos) {
        prev = cur
        cur = cur.next
        index++
      }
      prev.next = node
      cur.prev = node
      node.prev = prev
      node.next = cur
      this.length++
    }
  }

  /**
   * Get an element at the specified position in the double linked list.
   * @param {*} pos index
   */
  get(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error(this.posOutOfRangMsg)
    } 
    let index = 0
    let cur = this.head
    while (index < pos) {
      cur = cur.next
      index++
    }
    return cur.data
  }

  /**
   * Return the first index at which a given element in the double linked list.
   * @param {*} data 
   */
  indexOf(data) {
    let cur = this.head
    let index = 0
    while (index < this.length) {
      if (cur.data === data) {
        return index
      } else {
        cur = cur.next
        index++
      }
    }
    return -1
  }

  /**
   * Update an element at the specified position in the double linked list.
   * @param {*} pos
   * @param {*} data 
   */
  update(pos, data) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error(this.posOutOfRangMsg)
    }
    let index = 0
    let cur = this.head
    while (index < pos) {
      cur = cur.next
      index++
    }
    cur.data = data
    return true
  }

  /**
   * Remove an element at the specified position in the double linked list.
   * @param {*} pos index
   */
  remove(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error(this.posOutOfRangMsg)
    }
    if (pos === 0 && this.length - 1 === 0) {
      this.head = null
      this.tail = null
    } else if (pos === 0) {
      this.head.next.prev = null
      this.head = this.head.next
    } else if (pos === this.length - 1) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    } else {
      let cur = this.head
      let prev = null
      let index = 0
      while (index < pos) {
        prev = cur
        cur = cur.next
        index++
      }
      prev.next = cur.next
      cur.next.prev = prev
    }
    this.length--
    return true
  }

  /**
   * Return true if the double linked list is empty, or false if it is not.
   */
  isEmpty() {
    return this.length === 0 ? true : false
  }

  /**
   * Return the number of elements in the double linked list.
   */
  size() {
    return this.length
  }

  /**
   * Return a string representing each element in the double linked list.
   */
  toString() {
    let cur = this.head
    let str = ""
    while (cur) {
      str += cur.data + " "
      cur = cur.next
    }
    return str
  }
}