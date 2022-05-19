const SET_INPUT_VALUE = 'SET_INPUT_VALUE'

export type setInputValueAT = {
    type: typeof SET_INPUT_VALUE,
    payload: { value: number }
}

type actionsType = setInputValueAT

export const inputValueReducer = (value: number, action: actionsType): number => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return action.payload.value
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setInputValueAC = (newValue: number): setInputValueAT => ({
    type: SET_INPUT_VALUE,
    payload: {value: newValue}
})
