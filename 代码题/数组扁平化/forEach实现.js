/**
 * 使用forEach方法扁平化数组
 * @param {Array} arr 
 */
function flattenArray(arr) {
  const result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item))
    } else {
      result.push(item)
    }
  })
  return result
}

const nestedArr = [0, [1, [2, [3, [4, 5], 6], 7], 8], 9]
const res = flattenArray(nestedArr)
console.log(res)