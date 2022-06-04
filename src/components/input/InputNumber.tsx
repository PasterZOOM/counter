import React, {ChangeEvent} from 'react';
import style from './InputNumber.module.css'

type InputNumberPropsType = {
    callBack: (value: number) => void
    error?: boolean
    value: number
}

export const InputNumber: React.FC<InputNumberPropsType> = ({callBack, error, value}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        callBack(isNaN(e.currentTarget.valueAsNumber) ? 0 : e.currentTarget.valueAsNumber)

    return <div>
        <input className={error ? style.error : style.input}
               onChange={onChangeHandler}
               type="number"
               value={value.toFixed()}
        />
    </div>
}