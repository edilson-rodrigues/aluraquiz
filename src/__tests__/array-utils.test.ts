describe('array-utils', () => {
    beforeEach(() => {
        jest.resetModules()
    })

    test('remove removes an existing item', () => {
        const { remove } = require('../array-utils')
        expect(remove([1, 2, 3], 2)).toEqual([1, 3])
    })

    test('remove returns same array when item not found', () => {
        const { remove } = require('../array-utils')
        expect(remove([1, 2], 3)).toEqual([1, 2])
    })

    test('add starts from 1 on fresh module and increments', () => {
        const { add } = require('../array-utils')
        expect(add([])).toEqual([1])
        expect(add([1])).toEqual([1, 2])
    })
})
