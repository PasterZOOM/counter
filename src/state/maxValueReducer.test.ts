import {maxValueReducer, setMaxValueAC} from './maxValueReducer';

test('start value should change', () => {
    const maxStartValue = maxValueReducer(1, setMaxValueAC(4))

    expect(maxStartValue).toBe(4)
})