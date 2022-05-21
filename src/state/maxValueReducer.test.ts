import {maxValueReducer, setMaxValueAC} from './maxValueReducer';

test('start value should change', () => {
    const maxStartValue = maxValueReducer({value: 1}, setMaxValueAC(4))

    expect(maxStartValue.value).toBe(4)
})