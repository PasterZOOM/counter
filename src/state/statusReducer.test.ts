import {setErrorAC, setSetAC, statusReducer} from './statusReducer';


test('status should change to set', () => {

    const newStatus = statusReducer('error', setSetAC())

    expect(newStatus).toBe('set')
})
test('status should change to error', () => {

    const newStatus = statusReducer('counter', setErrorAC())

    expect(newStatus).toBe('error')
})