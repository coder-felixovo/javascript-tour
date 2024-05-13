import { Stack } from "./stack.js";

/**
 * 中缀表达式计算
 */
function nifixExpressionCalculate(expression) {
  const operatorStack = new Stack(); // 操作符栈
  const numberStack = new Stack(); // 数字栈
  const operatorList = ["+", "-", "*", "/"];
  const len = expression.length;
  let join = ""; // 拼接多个数字字符

  // 遍历表达式，对操作数、操作符做入栈处理
  for (let i = 0; i < len; i++) {
    const c = expression.charAt(i);
    if (c === "") continue;

    // 当前字符为数字
    const code = c.codePointAt();
    if (code >= 48 && code <= 57) {
      i === len - 1 ? numberStack.push(c) : join += c;
      continue;
    }

    // 当前字符为算术运算符
    if (operatorList.includes(c)) {

      // 将拼接的数字入栈
      numberStack.push(join);
      join = "";

      if (operatorStack.isEmpty()) {
        operatorStack.push(c);
        continue;
      } else {
        // 比较运算符优先级
        if (c === "*" || c === "/") {
          operatorStack.push(c);
        } else {
          const seeTopOperator = operatorStack.peek();
          if (seeTopOperator === "+" || seeTopOperator === "-") {
            operatorStack.push(c);
          } else {
            const numTop = numberStack.pop();
            const numAgain = numberStack.pop();
            const topOpeartor = operatorStack.pop();
            if (topOpeartor === "*") {
              numberStack.push(+numTop * +numAgain);
            } else if (topOpeartor === "/") {
              numberStack.push(+numAgain / +numTop);
            }
            operatorStack.push(c);
          }
        }
      }
    }
  }

  // 计算
  while(!numberStack.isEmpty() && !operatorStack.isEmpty()) {
    const topNum = numberStack.pop();
    const againNum = numberStack.pop();
    const topOperator = operatorStack.pop();
    switch(topOperator) {
      case "+":
        numberStack.push(+topNum + +againNum);
        break;
      case "-":
        numberStack.push(againNum - topNum);
        break;
      case "*":
        numberStack.push(topNum * againNum);
        break;
      case "/":
        numberStack.push(againNum / topNum);
        break;
    }
  }

  return numberStack.pop();
}

const exp1 = "1 + 2";
console.log(nifixExpressionCalculate(exp1));

const exp2 = "1 - 3";
console.log(nifixExpressionCalculate(exp2));

const exp3 = "3 * 3";
console.log(nifixExpressionCalculate(exp3));

const exp4 = "5 / 2";
console.log(nifixExpressionCalculate(exp4));