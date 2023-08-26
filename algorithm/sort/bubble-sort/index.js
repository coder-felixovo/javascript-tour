/**
 * 冒泡排序(由小到大排序)
 * 最好: O(n)
 * 最坏: O(n^2)
 * 平均: O(n^2)
 * 空间: O(1)
 * @param {Array} arr 
 */
export function bubbleSort(arr) {
  const len = arr.length
  // 外层循环控制比较轮数
  for (let i = 0; i < len - 1; i++) {
    // 内层循环控制比较次数
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
}