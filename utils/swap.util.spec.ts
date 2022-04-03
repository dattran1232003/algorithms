import { swapNumber, swapString } from './swap.util'

describe('================ SWAP UTIL FUNCTION ================', () => {
  test('swap 2 numbers', () => {
    const arr = [5, 4]
    swapNumber(arr, 0, 1)
    expect(arr).toStrictEqual([4, 5])
  })

  test('swap 2 strings', () => {
    const arr = ['b', 'a']
    swapString(arr, 0, 1)
    expect(arr).toStrictEqual(['a', 'b'])
  })
})
