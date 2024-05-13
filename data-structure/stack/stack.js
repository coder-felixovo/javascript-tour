export class Stack {
  /** 栈容器 */
  #_items;
  /** 栈顶索引 */
  #_top;
  /** 栈大小 */
  #_size;

  constructor() {
    this.#_items = [];
    this.#_top = -1;
    this.#_size = 0;
  }

  /** 向栈k顶添加元素 */
  push(element) {
    this.#_items.push(element);
    this.#_top++;
    this.#_size++;
  }

  /** 移除并返回栈顶元素 */
  pop() {
    if (this.isEmpty()) {
      throw ReferenceError("栈空");
    }
    this.#_top--;
    this.#_size--;
    return this.#_items.pop();
  }

  /** 查看但不移除栈顶元素 */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#_items[this.#_top];
  }

  /** 判断栈是否为空 */
  isEmpty() {
    return this.#_size === 0;
  }

  /** 获取栈的大小 */
  size() {
    return this.#_size;
  }

  /** 清空栈 */
  clear() {
    this.#_items = [];
  }

  /** 获取栈顶元素位置 */
  getTopIndex() {
    return this.#_top;
  }

  /**
   * 遍历栈内元素
   */
  traverl() {
    console.log(this.#_items.toString().split(",").join("_"));
  }
}