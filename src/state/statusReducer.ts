import {StatusType} from '../App';

const SET_ERROR = 'SET_ERROR'
const SET_COUNTER = 'SET_COUNTER'
const SET_SETTING = 'SET_SETTING'

export type setSetAT = {
    type: typeof SET_SETTING,
}
export type setErrorAT = {
    type: typeof SET_ERROR,
}
export type setCounterAT = {
    type: typeof SET_COUNTER,
}

type actionsType = setSetAT | setErrorAT | setCounterAT

export const statusReducer = (status: StatusType, action: actionsType): StatusType => {
    switch (action.type) {
        case SET_SETTING:
            return 'setting'
        case SET_ERROR:
            return 'error'
        case SET_COUNTER:
            return 'counter'
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const setErrorAC = (): setErrorAT => ({type: SET_ERROR});
export const setSettingAC = (): setSetAT => ({type: SET_SETTING})
export const setCounterAC = (): setCounterAT => ({type: SET_COUNTER})