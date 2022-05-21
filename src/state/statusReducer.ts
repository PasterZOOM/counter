import {StatusType} from '../App';

const SET_SET = 'SET_SET'
const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'

export type setSetAT = {
    type: typeof SET_SET,
}
export type setErrorAT = {
    type: typeof SET_ERROR,
}
export type setCounterAT = {
    type: typeof SET_COUNTER,
}

type actionsType = setSetAT | setErrorAT | setCounterAT

const initialState = {
    value: 'setting' as StatusType
}
type InitialStateType = typeof initialState

export const statusReducer = (status: InitialStateType = initialState, action: actionsType): InitialStateType => {
    switch (action.type) {
        case SET_SET:
            return {...status, value:'setting'}
        case SET_ERROR:
            return {...status, value:'error'}
        case SET_COUNTER:
            return {...status, value:'counter'}
        default:
            return status
    }
}

export const setSetAC = (): setSetAT => ({type: SET_SET})
export const setErrorAC = (): setErrorAT => ({type: SET_ERROR});
export const setCounterAC = (): setCounterAT => ({type: SET_COUNTER})