import {setInputValueAC, inputValueReducer} from './inputValueReducer';

test('start value should change', () => {
    const newValue = inputValueReducer(2, setInputValueAC(3))

    expect(newValue).toBe(3)
})