import {setValueAC, startValueReducer} from './startValueReducer';

test('start value should change', () => {
    const newStartValue = startValueReducer(2, setValueAC(3))

    expect(newStartValue).toBe(3)
})