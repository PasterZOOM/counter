import React from 'react';
import {Button} from '../button/Button';
import {Counter} from '../counter/Counter';
import style from './Scoreboard.module.css'
import {StatusType} from '../../App';

export type ScoreboardPropsType = {
    value: number
    startValue: number
    maxValue: number
    Inc: () => void
    Reset: () => void
    status: StatusType
}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, Inc, Reset, startValue, maxValue, status}) => {
        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter value={value} maxValue={maxValue} status={status}/>
                </div>
                <div className={style.buttons}>
                    <div>
                        <Button name={'INC'}
                                callBack={Inc}
                                disabled={value === maxValue || status !== 'counter'}/>
                    </div>
                    <div>
                        <Button name={'RESET'}
                                callBack={Reset}
                                disabled={value === startValue || status !== 'counter'}/>
                    </div>
                </div>
            </div>
        )
    }
