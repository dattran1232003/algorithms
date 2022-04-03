export const swapNumber = (arr: number[], a: number, b: number): void => {
  arr[a] = arr[b] + ((arr[b] = arr[a]), 0)
}

export const swapString = (arr: string[], a: number, b: number): void => {
  arr[a] = arr[b] + ((arr[b] = arr[a]), '')
}
