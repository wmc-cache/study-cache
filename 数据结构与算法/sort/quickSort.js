let arr = [2, 3, 1, 6, 4, 9]

function quickSort(arr) {
  if (arr.length < 2) return arr
  let left = []
  let right = []
  let middle = Math.floor(arr.length / 2)
  arr.forEach((ele) => {
    if (ele < arr[middle]) {
      //不能小于等于
      left.push(ele)
    }
    if (ele > arr[middle]) {
      right.push(ele)
    }
  })
  return quickSort(left).concat(arr[middle], quickSort(right))
}

console.log('quickSort', quickSort(arr))
