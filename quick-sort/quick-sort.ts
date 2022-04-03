import { swapNumber as swap } from '../utils/swap.util'

export function quickSort(arr: number[], low = 0, high = arr.length - 1): void {
  if (low >= high) {
    return
  }
  let piIdx = partition(arr, low, high)
  quickSort(arr, low, piIdx - 1)
  quickSort(arr, piIdx + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]
  let left = low
  let right = low

  while (right < high) {
    if (arr[right] <= pivot) {
      swap(arr, left, right)
      left++
    }
    right++
  }

  // swap left with pivot
  swap(arr, left, high)

  return left
}

function main() {
  console.log('================ QUICK SORT ================')
  const arr = [
    5, 3, 21, 6, 8, 7, 1, 34, 5, 54, 645, 7, 4, 57, 45, 75, 74, 7, 24, 2, 7,
    597, 52,
  ]

  console.log('before sort:', arr)
  quickSort(arr)
  console.log('after sort:', arr)
}
// main()
