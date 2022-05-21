const SET_MAX_VALUE = 'SET_MAX_VALUE'

export type setMaxValueAT = {
    type: typeof SET_MAX_VALUE,
    payload: { value: number }
}

type actionsType = setMaxValueAT
const initialState = {
    value: 5
}
type InitialStateType = typeof initialState

export const maxValueReducer = (value: InitialStateType = initialState, action: actionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return {...value, value: action.payload.value}
        default:
            return value
    }
}

export const setMaxValueAC = (newValue: number): setMaxValueAT => ({type: SET_MAX_VALUE, payload: {value: newValue}})