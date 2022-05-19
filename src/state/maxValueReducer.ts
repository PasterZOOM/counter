const SET_MAX_VALUE = 'SET_MAX_VALUE'

export type setMaxValueAT = {
    type: typeof SET_MAX_VALUE,
    payload: { value: number }
}

type actionsType = setMaxValueAT

export const maxValueReducer = (value: number, action: actionsType): number => {
    switch (action.type) {
        case 'SET_MAX_VALUE':
            return action.payload.value
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setMaxValueAC = (newValue: number): setMaxValueAT => ({type: SET_MAX_VALUE, payload: {value: newValue}})