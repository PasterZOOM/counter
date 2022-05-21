import {setStartValueAC, startValueReducer} from './startValueReducer';

test('start value should change', () => {
    const newStartValue = startValueReducer({value: 2}, setStartValueAC(3))

    expect(newStartValue.value).toBe(3)
})