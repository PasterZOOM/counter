const SET_START_VALUE = 'SET_START_VALUE'

export type setStartValueAT = {
    type: typeof SET_START_VALUE,
    payload: { value: number }
}

type actionsType = setStartValueAT

const initialState = {
    value: 0
}
type InitialStateType = typeof initialState

export const startValueReducer = (value: InitialStateType = initialState, action: actionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return {...value, value: action.payload.value}
        default:
            return value
    }
}

export const setStartValueAC = (newValue: number): setStartValueAT => ({
    type: SET_START_VALUE,
    payload: {value: newValue}
})
