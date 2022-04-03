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

  test('random cases', () => {
    const cases: number[][] = [
      [154, 501, 593, 436, 579, 615, 218, 478, 558, 631],
      [326, 541, 242, 580, 167],
      [232, 239, 144, 177, 478, 41, 450],
      [8, 55, 134, 244, 280, 346, 405, 599, 614, 666],
      [697, 417, 570, 175, 166, 57, 57, 303],
    ]

    cases.forEach((arr) => {
      quickSort(arr)
    })

    cases.forEach((arr) => {
      expect(arr).toBeSorted({ descending: false })
    })
  })
})
