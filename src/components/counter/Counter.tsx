import React from 'react';
import style from './Counter.module.css'
import {StatusType} from '../../App';

type MeaningPropsType = {
    count: number
    maxValue: number
    status: StatusType
}

export const Counter: React.FC<MeaningPropsType> =
    ({count, maxValue, status}) => {

        const styleHandler = () => ({
            color: count === maxValue ? 'red' : 'white',
            fontSize:
                count < 10000 ? '120px'
                    : count < 100000 ? '100px'
                        : count < 1000000 ? '85px'
                            : count < 10000000 ? '70px'
                                : count < 100000000 ? '62px'
                                    : count < 1000000000 ? '55px'
                                        : '50px',
            textShadow: '1px 2px 5px black'
        })

        return (
            status === 'error' ?
                <div className={style.errorText}>
                    Incorrect value!
                </div> :
                status === 'set' ?
                    <div className={style.setText}>
                        Enter values and press "SET"
                    </div> :
                    <div style={styleHandler()}>
                        {count}
                    </div>
        )
    }