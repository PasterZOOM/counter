const SET_START_VALUE = 'SET_START_VALUE'

export type setValueAT = {
    type: typeof SET_START_VALUE,
    payload: { value: number }
}

type actionsType = setValueAT

export const startValueReducer = (value: number, action: actionsType): number => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return action.payload.value
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setValueAC = (newValue: number): setValueAT => ({type: SET_START_VALUE, payload: {value: newValue}})
