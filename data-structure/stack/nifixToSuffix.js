import assert from "assert";
import { Stack } from "./stack.js";
import { loggerServ } from "../../libs/logger.js";

/**
 * 将中缀表达式转为后缀表达式
 * @param {string} expression
 * @return {string}
 */
function nifixToSuffix(expression) {
  const operatorStack = new Stack(); // 操作符栈
  const list = []; // 输出队列
  const len = expression.length;
  let join = ""; // 用于拼接数字字符

  // 扫描后缀表达式
  for (let i = 0; i < len; i++) {
    const c = expression[i];
    if (c === " ") continue;

    const code = c.codePointAt();
    if (code >= 48 && code <= 57) {
      // 当前字符为数字
      i === len - 1 ? list.push(c) : join += c;
    } else {
      if (join !== "") {
        list.push(join);
        join = "";
      }

      if (c === "(" || c === "*" || c === "/" || operatorStack.isEmpty() || operatorStack.peek() === "(") {
        operatorStack.push(c);
      } else if (c === ")") {
        // 遇到右括号，从操作符栈不断弹出运算符加入输出队列，直到遇到(，最后再弹出(
        while(operatorStack.peek() !== "(") {
          list.push(operatorStack.pop());
        }
        operatorStack.pop(); // 移除栈顶的左括号
      } else if (c === "+" || c === "-") {
        while(operatorStack.peek() === "*" || operatorStack.peek() === "/") {
          list.push(operatorStack.pop());
        }
        operatorStack.push(c);
      } else {
        throw Error("invalid operator");
      }
    }
  }

  // 扫描表达式结束，如果操作符栈非空，则依次弹出加入输出队列
  while(!operatorStack.isEmpty()) {
    list.push(operatorStack.pop());
  }

  let suffix = "";
  const listLen = list.length;
  for (let i = 0; i < listLen; i++) {
    suffix += list[i] + " ";
  }

  return suffix.trim();
}

const nifix1 = "1 + 2 * 3 / 4";
const postfix1 = "1 2 3 4 / * +";
const res1 = nifixToSuffix(nifix1);
loggerServ.info(`res1 output: ${res1}`);
assert(res1 == postfix1);

const nifix2 = "9 + (3 - 1) * 3 + 10 / 2";
const postfix2 = "9 3 1 - 3 * 10 2 / + +";
const res2 = nifixToSuffix(nifix2);
loggerServ.info(`res2 output: ${res2}`);
assert(res2 === postfix2);

// leetcode 150. 示例1
const nifix3 = "((2 + 1) * 3)";
const postfix3 = "2 1 + 3 *";
const res3 = nifixToSuffix(nifix3);
loggerServ.info(`res3 output: ${res3}`);
assert(res3 === postfix3);

// leetcode 150. 示例2
const nifix4 = "(4 + (13 / 5))";
const postfix4 = "4 13 5 / +";
const res4 = nifixToSuffix(nifix4);
loggerServ.info(`res4 output: ${res4}`);
assert(res4 === postfix4);