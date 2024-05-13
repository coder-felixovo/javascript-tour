import { Stack } from "./stack.js";

/**
 * 将中缀表达式转为后缀表达式
 */
function convertNifixToSuffix(expression) {
  const operatorStack = new Stack(); // 操作符栈
  const list = []; // 输出队列
  const operatorList = ["+", "-", "*", "/"];
  const len = expression.length;

  // 扫描后缀表达式
  for (let i = 0; i < len; i++) {
    const c = expression.charAt(i);
    if (c === "") continue;

    // 当前字符为数字
    const code = c.codePointAt();
    if (code >= 48 && code <= 57) {
      list.push(c);
      continue;
    }

    // 当前字符为左括号(
    if (c === "(") {
      operatorStack.push(c);
      continue;
    }

    // 当前字符为右括号
    if (c === ")") {
      while(operatorStack.peek() !== "(") {
        list.push(operatorStack.pop());
      }
      operatorStack.pop();
      continue;
    }

    // 当前字符为运算符
    if (operatorList.includes(c)) {
      if (c === "*" || c === "/" || operatorStack.isEmpty() || operatorStack.peek() === "(") {
        operatorStack.push(c);
      } else {
        while(operatorStack.peek() !== "+" && operatorStack.peek() !== "-") {
          list.push(operatorStack.pop());
        }
        operatorStack.push(c);
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

  return suffix;
}

const exp1 = "1 + 2 * 3 / 4";
console.log(convertNifixToSuffix(exp1));
// 1 2 3 4 / * +

const exp2 = "9 + (3 - 1) * 3 + 10 / 2";
console.log(convertNifixToSuffix(exp2));
// 9 3 1 - 3 * 1 0 2 / + +

const exp3 = "1+((2+3)*4)-5";
console.log(convertNifixToSuffix(exp3));
// 1 2 3 + 4 * 5 - +