import React, {useCallback} from 'react'
import {Button} from '../button/Button'
import {Counter} from '../counter/Counter'
import style from './Scoreboard.module.css'
import {incAC, resetAC} from '../../state/counterReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../state/store'
import {StatusType} from '../../App'

export const Scoreboard = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()

    const Reset = useCallback(() => dispatch(resetAC(startValue)), [dispatch, startValue])
    const Inc = useCallback(() => count < maxValue && dispatch(incAC()), [dispatch, count, maxValue])

    return (
        <div className={style.scoreboard}>
            <div className={style.counter}>
                <Counter count={count} maxValue={maxValue} status={status}/>
            </div>
            <div className={style.buttons}>
                <div>
                    <Button name={'INC'}
                            callBack={Inc}
                            disabled={count === maxValue
                                || status !== 'counter'}/>
                </div>
                <div>
                    <Button name={'RESET'}
                            callBack={Reset}
                            disabled={count === startValue
                                || status !== 'counter'}/>
                </div>
            </div>
        </div>
    )
}
