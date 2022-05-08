import React from 'react';
import style from './Counter.module.css'
import {StatusType} from '../../App';
import {CounterValue} from './counterValue/CounterValue';

type CounterPropsType = {
    count: number
    maxValue: number
    status: StatusType
}

export const Counter: React.FC<CounterPropsType> =
    ({count, maxValue, status}) => {
        return (
            status === 'error' ?
                <div className={style.errorText}>
                    Incorrect value!
                </div> :
                status === 'set' ?
                    <div className={style.setText}>
                        Enter values and press "SET"
                    </div>
                    : <CounterValue count={count} maxValue={maxValue}/>

        )
    }

