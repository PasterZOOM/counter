import React from 'react';
import style from './InputNumber.module.css'


type InputNumberPropsType = {

    callBack: (value: number) => void
    value: number
    error?: boolean

}

export const InputNumber: React.FC<InputNumberPropsType> = ({callBack, value, error}) => {
    return (
        <div>
            <input className={error ? style.error : style.input}
                   type="number"
                   value={value}
                   onChange={(e) => {
                       callBack(e.currentTarget.valueAsNumber)
                   }}
            />
        </div>
    )
}