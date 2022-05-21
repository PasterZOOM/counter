import {setCounterAC, setErrorAC, setSetAC, statusReducer} from './statusReducer';

test('status should change to set', () => {
    const newStatus = statusReducer({value:'error'}, setSetAC())

    expect(newStatus.value).toBe('setting')
})
test('status should change to error', () => {
    const newStatus = statusReducer({value:'counter'}, setErrorAC())

    expect(newStatus.value).toBe('error')
})
test('status should change to counter', () => {
    const newStatus = statusReducer({value:'setting'}, setCounterAC())

    expect(newStatus.value).toBe('counter')
})