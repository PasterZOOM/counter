import {setStartValueAC, startValueReducer} from './startValueReducer';

test('start value should change', () => {
    const newStartValue = startValueReducer(2, setStartValueAC(3))

    expect(newStartValue).toBe(3)
})