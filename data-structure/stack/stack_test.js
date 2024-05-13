import asserts from "assert";
import { Stack } from "./stack.js";

const stack = new Stack();

// 初始化
asserts(stack.isEmpty());
asserts(stack.size() === 0);

// 添加元素
const e = "apple";
stack.push(e);
asserts(!stack.isEmpty());
asserts(stack.size() === 1);

// 查看栈顶元素
asserts(stack.peek() === e);

// 移除元素
const e1 = stack.pop();
asserts(e1 === e);

asserts(stack.isEmpty());
asserts(stack.getTopIndex() === -1);