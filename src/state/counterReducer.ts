import {StatusType} from '../App';

const INC = 'INC'
const RESET = 'RESET'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_SET = 'SET_SET'
const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'

export type IncAT = {
    type: typeof INC,
}
export type ResetAT = {
    type: typeof RESET,
    startValue: number
}
export type setMaxValueAT = {
    type: typeof SET_MAX_VALUE,
    maxValue: number
}
export type setStartValueAT = {
    type: typeof SET_START_VALUE,
    startValue: number
}
export type setSetAT = {
    type: typeof SET_SET,
}
export type setErrorAT = {
    type: typeof SET_ERROR,
}
export type setCounterAT = {
    type: typeof SET_COUNTER,
}

type ActionsType = IncAT | ResetAT | setMaxValueAT | setStartValueAT | setSetAT | setErrorAT | setCounterAT

const initialState = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    status: 'setting' as StatusType
}
type InitialStateType = typeof initialState

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

export const incAC = (): IncAT => ({type: INC})
export const resetAC = (startValue: number): ResetAT => ({type: RESET, startValue: startValue})
export const setMaxValueAC = (newValue: number): setMaxValueAT => ({type: SET_MAX_VALUE, maxValue: newValue})
export const setStartValueAC = (newValue: number): setStartValueAT => ({type: SET_START_VALUE, startValue: newValue})
export const setSetAC = (): setSetAT => ({type: SET_SET})
export const setErrorAC = (): setErrorAT => ({type: SET_ERROR})
export const setCounterAC = (): setCounterAT => ({type: SET_COUNTER})