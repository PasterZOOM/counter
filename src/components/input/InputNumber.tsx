import React, {ChangeEvent} from 'react';
import style from './InputNumber.module.css'


type InputNumberPropsType = {
    value: number
    error?: boolean
    callBack: (value: number) => void
}

export const InputNumber: React.FC<InputNumberPropsType> =
    ({value, error, callBack}) => {
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
            callBack(e.currentTarget.valueAsNumber)

        const onBlurHandler = () => isNaN(value) && callBack(0)

        return (
            <div>
                <input className={error ? style.error : style.input}
                       type="number"
                       value={value}
                       onBlur={onBlurHandler}
                       onChange={onChangeHandler}
                />
            </div>
        )
    }