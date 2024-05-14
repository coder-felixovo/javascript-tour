import assert from "assert";

/**
 * 20. 有效的括号
 * @param {string} s 
 * @returns {boolean}
 * @description https://leetcode.cn/problems/valid-parentheses/description/
 */
function isValidBracket(s) {

  // 括号匹配一定是偶数
  if (s.length % 2 === 1) {
    return false;
  }

  // 括号映射
  const bracketMap = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);

  const stack = [];

  for (let c of s) {
    if (bracketMap.has(c)) {
      // 遇到右括号
      const len = stack.length;
      // 栈中没有左括号 || 类型不匹配
      if (!len || stack[len - 1] !== bracketMap.get(c)) {
        return false;
      }
      // 左括号出栈（闭合一对括号）
      stack.pop();
    } else {
      // 遇到左括号，入栈
      stack.push(c);
    }
  }

  // 栈中无左括号 
  return !stack.length;
}

assert(isValidBracket("()"));
assert(isValidBracket("()[]{}"));
assert(isValidBracket("([]){}"));
assert(!isValidBracket("(["));
assert(!isValidBracket("(]"));