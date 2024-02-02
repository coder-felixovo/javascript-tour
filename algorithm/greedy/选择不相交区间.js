/**
 * Q：数轴上有n个区间, 要求选择尽量多个区间，使得这些区间两两没有公共点
 * R：贪心算法，策略：优先选择结束最早的区间
 */

function selectIntervals(intervals) {
  // 同时按照区间的开始和结束排序
  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0])
  console.log("origin intervals", intervals)
  
  let lastEnd = -Infinity
  let count = 0
  let list = []

  for (let i = 0; i < intervals.length; i++) {
      console.log(`item ${i}`, intervals[i])
      if (intervals[i][0] > lastEnd) {
        // 如果当前区间的开始大于上一个区间的结束，那么这个区间可以被选择
        count++;
        lastEnd = intervals[i][1]
        list.push(intervals[i])
      }
  }

  return {
    count,
    list
  }
}

let intervals = [[1,2], [2,3], [3,4], [1,3]]
console.log(selectIntervals(intervals)) // 3

