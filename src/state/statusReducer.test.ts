import {setCounterAC, setErrorAC, setSettingAC, statusReducer} from './statusReducer';

test('status should change to set', () => {
    const newStatus = statusReducer('error', setSettingAC())

    expect(newStatus).toBe('setting')
})
test('status should change to error', () => {
    const newStatus = statusReducer('counter', setErrorAC())

    expect(newStatus).toBe('error')
})
test('status should change to counter', () => {
    const newStatus = statusReducer('setting', setCounterAC())

    expect(newStatus).toBe('counter')
})