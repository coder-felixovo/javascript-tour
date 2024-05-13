import assert from "assert";
import { Stack } from "./stack.js";

/** 四则运算 */
function calculate(operator, v1, v2) {
  let value;
  switch(operator) {
    case "+":
      value = v1 + v2;
      break;
    case "-":
      value = v2 - v1;
      break;
    case "*":
      value = v1 * v2;
      break;
    case "/":
      value = v2 / v1;
      break;
    default:
      throw Error("invalid operator");
  }
  return value;
}

/**
 * 中缀表达式计算
 */
function nifixCalculate(expression) {
  const operatorStack = new Stack(); // 操作符栈
  const numberStack = new Stack(); // 数字栈

  const len = expression.length;
  let join = ""; // 拼接多个数字字符

  // 遍历表达式，对操作数、操作符做入栈处理
  for (let i = 0; i < len; i++) {
    const c = expression[i];
    if (c === " ") continue;

    const code = c.codePointAt();
    if (code >= 48 && code <= 57) {
      // 当前字符为数字
      i === len - 1 ? numberStack.push(Number(c)) : join += c;
    } else {
      // 将拼接的数字入栈
      if (join !== "") {
        numberStack.push(Number(join));
        join = "";
      }

      if (operatorStack.isEmpty() || c === "(" || c === "*" || c === "/") {
        operatorStack.push(c);
      } else if (c === "+" || c === "-") {
        const seeTopOperator = operatorStack.peek();
        if (seeTopOperator === "*" || seeTopOperator === "/") {
          const v1 = numberStack.pop();
          const v2 = numberStack.pop();
          const topOpeartor = operatorStack.pop();
          numberStack.push(calculate(topOpeartor, v1, v2));
        }
        operatorStack.push(c);
      } else if (c === ")") {
        while(operatorStack.peek() !== "(") {
          const v1 = numberStack.pop();
          const v2 = numberStack.pop();
          const topOpeartor = operatorStack.pop();
          numberStack.push(calculate(topOpeartor, v1, v2));
        }
        // 丢弃(
        operatorStack.pop();
      } else {
        throw Error("invalid character");
      }
    }
  }

  // 计算
  while(!operatorStack.isEmpty()) {
    const v1 = numberStack.pop();
    const v2 = numberStack.pop();
    const topOperator = operatorStack.pop();
    numberStack.push(calculate(topOperator, v1, v2));
  }

  return numberStack.pop();
}

const exp1 = "1 + 2";
assert(nifixCalculate(exp1) === 3);

const exp2 = "1 - 2";
assert(nifixCalculate(exp2) === -1);

const exp3 = "5*2";
assert(nifixCalculate(exp3) === 10);

const exp4 = "5/2";
assert(nifixCalculate(exp4) === 2.5);

const exp5 = "(1 + 2) * 3";
assert(nifixCalculate(exp5) === 9);

const exp6 = "(1 + 2) * (3 + 4)";
assert(nifixCalculate(exp6) === 21);

const exp7 = "((2+8))";
assert(nifixCalculate(exp7) === 10);

const exp8 = "1 + 2 * 3 / 4";
assert(nifixCalculate(exp8) === 2.5);

const exp9 = "2*2+3*4";
assert(nifixCalculate(exp9) === 16);