import 'jest-sorted/index'
import { insertSort } from './insert-sort'

describe('================ INSERT SORT ================', () => {
  test('1 elment array', () => {
    const arr = [1]
    insertSort(arr)
    expect(arr).toStrictEqual([1])
  })

  test('2 elements array', () => {
    const arr = [5, 4]
    insertSort(arr)
    expect(arr).toStrictEqual([4, 5])
  })

  test('random cases', () => {
    const inputs: number[][] = [
      [154, 501, 593, 436, 579, 615, 218, 478, 558, 631],
      [326, 541, 242, 580, 167],
      [232, 239, 144, 177, 478, 41, 450],
      [8, 55, 134, 244, 280, 346, 405, 599, 614, 666],
      [697, 417, 570, 175, 166, 57, 57, 303],
    ]

    const expectedArrays = [
      [154, 218, 436, 478, 501, 558, 579, 593, 615, 631],
      [167, 242, 326, 541, 580],
      [41, 144, 177, 232, 239, 450, 478],
      [8, 55, 134, 244, 280, 346, 405, 599, 614, 666],
      [57, 57, 166, 175, 303, 417, 570, 697],
    ]

    inputs.forEach((arr) => insertSort(arr))

    inputs.forEach((arr) => expect(arr).toBeSorted())
    expect(inputs).toStrictEqual(expectedArrays)
  })
})
