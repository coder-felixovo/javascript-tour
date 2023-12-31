/**
 * 选择排序
 * 最好：O(n^2)
 * 最坏：O(n^2)
 * 平均：O(n^2)
 * 空间：O(1)
 * In-place, 不稳定
 * @param {Array} arr 
 * @returns 
 */
export function selectionSort(arr) {
  const len = arr.length
  let minIndex, temp
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}