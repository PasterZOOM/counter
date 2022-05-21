const INC = 'INC'
const RESET = 'RESET'
const SET_COUNT_VALUE_FROM_LOCAL_STORAGE = 'SET_COUNT_VALUE_FROM_LOCAL_STORAGE'

export type IncAT = {
    type: typeof INC,
}
export type ResetAT = {
    type: typeof RESET,
    startValue: number
}
export type SetValueFromLocalStorageAT = {
    type: typeof SET_COUNT_VALUE_FROM_LOCAL_STORAGE
    value: number
}

type ActionsType = IncAT | ResetAT | SetValueFromLocalStorageAT

const initialState = {
    value: 0
}
type InitialStateType = typeof initialState

export const countReducer = (count: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INC:
            return {...count, value: count.value + 1}
        case RESET:
            return {...count, value: action.startValue}
        case SET_COUNT_VALUE_FROM_LOCAL_STORAGE:
            return {...count, value: action.value}
        default:
            return count
    }
}

export const incAC = (): IncAT => ({type: INC})
export const resetAC = (startValue: number): ResetAT => ({type: RESET, startValue: startValue})

export const setValueFromLocalStorageAC = (value: number) => ({type: SET_COUNT_VALUE_FROM_LOCAL_STORAGE, value: value})
