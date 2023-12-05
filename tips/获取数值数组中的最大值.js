const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81]

const max1 = arr.reduce((a, b) => Math.max(a, b), -Infinity)
console.log(max1) // 81

function getMaxOfArray(numArr) {
  return Math.max.apply(null, numArr)
}

const max2 = getMaxOfArray(arr)
console.log(max2) // 81

const max3 = Math.max(...arr)
console.log(max3) // 81