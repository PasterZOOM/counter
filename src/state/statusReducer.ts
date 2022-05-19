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

export const statusReducer = (state: StatusType, action: actionsType): StatusType => {
    switch (action.type) {
        case 'SET_SET':
            return 'setting'
        case 'SET_ERROR':
            return 'error'
        case 'SET_COUNTER':
            return 'counter'

        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setSetAC = (): setSetAT => ({type: SET_SET})
export const setErrorAC = (): setErrorAT => ({type: SET_ERROR});
export const setCounterAC = (): setCounterAT => ({type: SET_COUNTER})