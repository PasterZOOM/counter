import {countReducer, incAC, resetAC} from './countReducer';

test('count should be +1', () => {
    const newCount = countReducer(2, incAC())

    expect(newCount).toBe(3)
})
test('count should be 0', () => {
    const newCount = countReducer(10, resetAC())

    expect(newCount).toBe(0)
})