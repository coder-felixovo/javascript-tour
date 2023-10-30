import { Node, SingleLinkedList } from "./SingleLinkedList.js"

const sll = new SingleLinkedList()

const a = new Node("a")
const b = new Node("b")

sll.append(a)
sll.append(b)

const c = new Node("c")
sll.insert(c, sll.size)
const d = new Node("d")
sll.insert(d, 0)
const e = new Node("e")
sll.insert(e, 2)

console.log("-----first traverse")
sll.traverse()

console.log(sll.find(4))

sll.remove(3)
sll.remove()
sll.remove(sll.size)

console.log("-----second traverse, after removing some elements")

sll.traverse()

