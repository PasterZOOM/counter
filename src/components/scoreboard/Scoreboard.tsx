import React from 'react';
import {Button} from '../button/Button';
import {Counter} from '../counter/Counter';
import style from './Scoreboard.module.css'
import {StatusType} from '../../App';

export type ScoreboardPropsType = {
    count: number
    maxValue: number
    startValue: number
    status: StatusType
    Inc: () => void
    Reset: () => void

}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({
         count, maxValue, startValue, status,
         Inc, Reset
     }) => {

        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter count={count} maxValue={maxValue} status={status}/>
                </div>
                <div className={style.buttons}>
                    <div>
                        <Button name={'INC'}
                                callBack={Inc}
                                disabled={count === maxValue || status !== 'counter'}/>
                    </div>
                    <div>
                        <Button name={'RESET'}
                                callBack={Reset}
                                disabled={count === startValue || status !== 'counter'}/>
                    </div>
                </div>
            </div>
        )
    }
