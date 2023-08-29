/**
 * 插入排序
 * 最好: O(n)
 * 最坏: O(n^2)
 * 平均: O(n^2)
 * 空间: O(1)
 * In-place, 稳定
 * @param {Array} arr 
 */
export function insertionSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let current = arr[i]
    let preIndex = i - 1
    while(preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}