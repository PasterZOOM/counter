const INC = 'INC'
const RESET = 'RESET'

export type incAT = {
    type: typeof INC,
}
export type resetAT = {
    type: typeof RESET,
    payload: { startValue: number }
}

type actionsType = incAT | resetAT

export const countReducer = (count: number, action: actionsType): number => {
    switch (action.type) {
        case INC:
            return count + 1
        case RESET:
            return action.payload.startValue
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const incAC = (): incAT => ({type: INC})
export const resetAC = (startValue: number): resetAT => ({
    type: RESET,
    payload: {startValue: startValue}
})
