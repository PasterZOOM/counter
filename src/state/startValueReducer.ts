const SET_START_VALUE = 'SET_START_VALUE'

export type setStartValueAT = {
    type: typeof SET_START_VALUE,
    payload: { value: number }
}

type actionsType = setStartValueAT

export const startValueReducer = (value: number, action: actionsType): number => {
    switch (action.type) {
        case 'SET_START_VALUE':
            return action.payload.value
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setStartValueAC = (newValue: number): setStartValueAT => ({
    type: SET_START_VALUE,
    payload: {value: newValue}
})
