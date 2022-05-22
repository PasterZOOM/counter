import {counterReducer, incAC, resetAC} from './counterReducer';
import {StatusType} from '../App';

test('count should be +1', () => {
    const newCount = counterReducer({
        count: 0,
        maxValue: 5,
        startValue: 0,
        status: 'setting' as StatusType
    }, incAC())

    expect(newCount.count).toBe(1)
})
test('count should be change', () => {
    const newCount = counterReducer({
        count: 0,
        maxValue: 5,
        startValue: 0,
        status: 'setting' as StatusType
    }, resetAC(6))

    expect(newCount.count).toBe( 6)
})