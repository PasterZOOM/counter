import React from 'react';
import style from './CounterValue.module.css';


export type CounterValuePropsType = {
    count: number
    maxValue: number
}
export const CounterValue: React.FC<CounterValuePropsType> = (
    {count, maxValue}) => {

    // const fontSize = () => {
    //     let text = document.querySelector(`.${style.classicText}`) as HTMLElement
    //     if (count > 9999) {
    //         for (let i = 120; text.offsetWidth > 260; i -= 2) {
    //             text.style.fontSize = i + 'px'
    //         }
    //         for (let j = 22; text.offsetWidth < 260; j += 2) {
    //             text.style.fontSize = j + 'px'
    //         }
    //     } else text.style.fontSize = 120 + 'px'
    // }
    //
    // window.onclick = fontSize
    // window.onload = fontSize

    return <div className={count === maxValue ? style.redText : style.classicText}>
        {count}
    </div>
}