import React, {ChangeEvent} from 'react';
import style from './InputNumber.module.css'

type InputNumberPropsType = {
    callBack: (value: number) => void
    error?: boolean
    value: number
}

export const InputNumber: React.FC<InputNumberPropsType> = ({callBack, error, value}) => {

    const onBlurHandler = () => isNaN(value) && callBack(0)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => callBack(isNaN(value) ? 0 : e.currentTarget.valueAsNumber)

    return <div>
        <input className={error ? style.error : style.input}
               onBlur={onBlurHandler}
               onChange={onChangeHandler}
               type="number"
               value={value.toFixed()}
        />
    </div>
}