import React from 'react';
import style from './Counter.module.css'
import {StatusType} from '../../App';

type MeaningPropsType = {
    count: number
    maxValue: number
    status: StatusType
}

export const Counter: React.FC<MeaningPropsType> = ({count, maxValue, status}) => {
    return (
        status === 'error' ?
            <div className={style.errorText}>
                Incorrect value!
            </div> :
            status === 'set' ?
                <div className={style.setText}>
                    Enter values and press "SET"
                </div> :
                <div className={count === maxValue ? style.redText : style.classicText}>
                    {count}
                </div>
    )
}