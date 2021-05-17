const arr = [6, 7, 4, 5, 3]

function insertionSort(arr) {
  let i = 1
  while (i > 0 && i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      swap(arr[i], arr[i - 1])

    }
    i++
  }


}


insertionSort(arr)
console.log(arr)

function swap(ele1, ele2) {
  let tmp;
  tmp = ele1
  ele1 = ele2
  ele2 = tmp

}