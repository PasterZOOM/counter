import {countReducer, incAC, resetAC} from './countReducer';

test('count should be +1', () => {
    const newCount = countReducer({value: 0}, incAC())

    expect(newCount.value).toBe(1)
})
test('count should be change', () => {
    const newCount = countReducer({value: 10}, resetAC(6))

    expect(newCount.value).toBe( 6)
})