import 'jest-sorted/index'
import { quickSort } from './quick-sort'

describe('================ QUICK SORT ================', () => {
  test('1 elment array', () => {
    const arr = [1]
    quickSort(arr)
    expect(arr).toStrictEqual([1])
  })

  test('2 elements array', () => {
    const arr = [5, 4]
    quickSort(arr)
    expect(arr).toStrictEqual([4, 5])
  })

  test('sorted array (same direction)', () => {
    const arr = [1, 2, 3]
    quickSort(arr)

    expect(arr).toStrictEqual([1, 2, 3])
  })

  test('sorted array (reverse direction)', () => {
    const arr = [3, 2, 1]
    quickSort(arr)

    expect(arr).toStrictEqual([1, 2, 3])
  })

  test('random cases', () => {
    const inputs: number[][] = [
      [154, 501, 593, 436, 579, 615, 218, 478, 558, 631],
      [326, 541, 242, 580, 167],
      [232, 239, 144, 177, 478, 41, 450],
      [8, 55, 134, 244, 280, 346, 405, 599, 614, 666],
      [697, 417, 570, 175, 166, 57, 57, 303],
    ]

    const expectedArrays = inputs.map((arr) => [...arr].sort((a, b) => a - b))

    inputs.forEach((arr) => quickSort(arr))

    inputs.forEach((arr) => expect(arr).toBeSorted())
    inputs.forEach((arr, i) => expect(arr).toStrictEqual(expectedArrays[i]))
  })
})
