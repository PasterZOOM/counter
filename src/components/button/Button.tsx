import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string
    disabled: boolean
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = React.memo(({name, disabled, callBack}) => {
    return (
        <>
            <button className={style.button}
                    onClick={callBack}
                    disabled={disabled}
            >{name}</button>
        </>
    )
})