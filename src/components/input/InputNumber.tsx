import React, {ChangeEvent} from 'react';
import style from './InputNumber.module.css'


type InputNumberPropsType = {

    callBack: (value: number) => void
    value: number
    error?: boolean

}

export const InputNumber: React.FC<InputNumberPropsType> = ({callBack, value, error}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.valueAsNumber)
    }
    const onBlurHandler = () => {
        isNaN(value) && callBack(0)
    }

    return (
        <div>
            <input className={error ? style.error : style.input}
                   type="number"
                   value={value}
                   onChange={onChangeHandler}
                   onBlur={ onBlurHandler }
            />
        </div>
    )
}