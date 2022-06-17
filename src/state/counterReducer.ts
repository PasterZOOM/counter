import {StatusType} from '../App';

const INC = 'INC'
const RESET = 'RESET'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_SET = 'SET_SET'
const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'

export type IncAT = ReturnType<typeof incAC>
export type ResetAT = ReturnType<typeof resetAC>
export type setMaxValueAT = ReturnType<typeof setMaxValueAC>
export type setStartValueAT = ReturnType<typeof setStartValueAC>
export type setSetAT = ReturnType<typeof setSetAC>
export type setErrorAT = ReturnType<typeof setErrorAC>
export type setCounterAT = ReturnType<typeof setCounterAC>

type ActionsType = IncAT | ResetAT | setMaxValueAT | setStartValueAT | setSetAT | setErrorAT | setCounterAT

const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    status: 'setting' as StatusType
}
export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INC:
            return {...state, count: state.count + 1}
        case RESET:
            return {...state, count: action.startValue}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case SET_START_VALUE:
            return {...state, startValue: action.startValue}
        case SET_SET:
            return {...state, status: 'setting'}
        case SET_ERROR:
            return {...state, status: 'error'}
        case SET_COUNTER:
            return {...state, status: 'counter'}
        default:
            return state
    }
}

export const incAC = () => ({type: INC} as const)
export const resetAC = (startValue: number) => ({type: RESET, startValue: startValue} as const)
export const setMaxValueAC = (newValue: number) => ({type: SET_MAX_VALUE, maxValue: newValue} as const)
export const setStartValueAC = (newValue: number) => ({type: SET_START_VALUE, startValue: newValue} as const)
export const setSetAC = () => ({type: SET_SET} as const)
export const setErrorAC = () => ({type: SET_ERROR} as const)
export const setCounterAC = () => ({type: SET_COUNTER} as const)