import { swapNumber as swap } from '../utils/swap.util'

export function insertSort(arr: number[]): void {
  let current

  let i, j

  for (i = 1; i < arr.length; ++i) {
    current = arr[i]
    for (j = i - 1; j >= 0; --j) {
      if (current >= arr[j]) {
        break
      }
      swap(arr, j + 1, j)
    }
  }
}

function main() {
  const arr = [2, 5, 3, 9, 1, 6]
  /*
   [2, 3, 5, 9, 1, 6]
   */
}
