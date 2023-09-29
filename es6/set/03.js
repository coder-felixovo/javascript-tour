// Set -> Array
{
  let set = new Set(['red', 'green', 'blue'])
  let arr = [...set]
  console.log(arr)
  // [ 'red', 'green', 'blue' ]
}



// 去除重复成员
{
  let arr = [1, 2, 3, 1, 2]
  let unique = [...new Set(arr)]
  console.log(unique)
  // [ 1, 2, 3 ]
}



// 间接使用数组遍历方法
{
  let set = new Set([1, 2, 3])
  let square = new Set([...set].map(x => x * 2))
  console.log(square)
  // Set(3) { 2, 4, 6 }
}



{
  let a = new Set([1, 2, 3])
  let b = new Set([3, 4, 5])
  
  // 并集
  let union = new Set([...a, ...b])
  console.log(union)
  // Set(5) { 1, 2, 3, 4, 5 }

  // 交集
  let intersect = new Set([...a].filter(x => b.has(x)))
  console.log(intersect)
  // Set(1) { 3 }

  // a 相对于 b 的差集
  let difference = new Set([...a].filter(x => !b.has(x)))
  console.log(difference)
  // Set(2) { 1, 2 }
}