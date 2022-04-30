import React from 'react';
import {Button} from '../button/Button';
import {Counter} from '../counter/Counter';
import style from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    value: number
    startValue: number
    maxValue: number
    Inc: () => void
    Reset: () => void
}

export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, Inc, Reset, startValue, maxValue}) => {
        return (
            <div className={style.scoreboard}>
                <div className={style.counter}>
                    <Counter value={value} maxValue={maxValue}/>
                </div>
                <div className={style.buttons}>
                    <div>
                        <Button name={'INC'}
                                callBack={Inc}
                                disabled={value === maxValue}/>
                    </div>
                    <div>
                    <Button name={'RESET'}
                            callBack={Reset}
                            disabled={value === startValue}/>
                    </div>
                </div>
            </div>
        )
    }
