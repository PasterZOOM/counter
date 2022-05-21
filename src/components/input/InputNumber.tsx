import React, {ChangeEvent} from 'react';
import style from './InputNumber.module.css'
import {inputValueReducer, setInputValueAC} from '../../state/inputValueReducer';


type InputNumberPropsType = {
    value: number
    error?: boolean
    callBack: (value: number) => void
}

export const InputNumber: React.FC<InputNumberPropsType> =
    ({value, error, callBack}) => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
            callBack(e.currentTarget.valueAsNumber)
        const onBlurHandler = () => isNaN(value) && callBack(inputValueReducer(value, setInputValueAC(0)))

        return (
            <div>
                <input className={error ? style.error : style.input}
                       max="9999"
                       type="number"
                       value={value}
                       onBlur={onBlurHandler}
                       onChange={onChangeHandler}
                />
            </div>
        )
    }