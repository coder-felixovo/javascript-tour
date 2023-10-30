import { DoubleLinkedList  } from "./DoubleLinkedList.js";

const dll = new DoubleLinkedList()

dll.append(0)
dll.append(1)
console.log(dll.toString())
// "0 1"

dll.insert(2, dll.length)
console.log(dll.toString())
// "0 1 2"

dll.insert(3, 0)
console.log(dll.toString())
// "3 0 1 2"

dll.insert(4, 2)
console.log(dll.toString())
// "3 0 4 1 2"

const res = dll.get(3)
console.log(res)
// 1

dll.append(0)
console.log(dll.toString())
// "3 0 4 1 2 0"

const res1 = dll.indexOf(0)
console.log(res1)
// 1

dll.update(2, 80)
console.log(dll.toString())
// "3 0 80 1 2 0"

dll.remove(0)
console.log(dll.toString())
// "0 80 1 2 0"

dll.remove(dll.length - 1)
console.log(dll.toString())
// "0 80 1 2"

dll.remove(1)
console.log(dll.toString())
// "0 1 2"

const res2 = dll.isEmpty()
console.log(res2)
// false

const res3 = dll.size()
console.log(res3)
// 3

const res4 = dll.toString()
console.log(res4)
// "0 1 2"