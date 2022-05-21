import React from 'react';
import {Button} from '../button/Button';
import style from './Settings.module.css'
import {InputNumber} from '../input/InputNumber';
import {StatusType} from '../../App';
import {Dispatch} from 'redux';
import {setCounterAC, setErrorAC} from '../../state/statusReducer';
import {resetAC} from '../../state/countReducer';

export type ScoreboardPropsType = {
    status: StatusType
    maxValue: number
    startValue: number
    setCount: Dispatch//(startValue: number) => void
    setStatus: Dispatch//(value: StatusType) => void
    ChangeMaxValue: (value: number) => void
    ChangeStartValue: (value: number) => void
}

export const Settings: React.FC<ScoreboardPropsType> =
    ({
         status, maxValue, startValue,
         setCount, setStatus, ChangeMaxValue, ChangeStartValue
     }) => {

        (maxValue <= startValue || startValue < 0) && setStatus(setErrorAC())
        const setButtonOnChange = () => {
            setStatus(setCounterAC())
            setCount(resetAC(startValue))
        }

        return (
            <div className={style.setting}>
                <div className={style.values}>
                    <div className={style.settingString}>
                        <div className={style.text}>
                            MAX VALUE:
                        </div>
                        <div className={style.input}>
                            <InputNumber value={maxValue}
                                         callBack={ChangeMaxValue}
                                         error={maxValue <= startValue || maxValue <= 0}
                            />
                        </div>
                    </div>
                    <div className={style.settingString}>
                        <div className={style.text}>
                            START VALUE:
                        </div>
                        <div className={style.input}>
                            <InputNumber value={startValue}
                                         callBack={ChangeStartValue}
                                         error={status === 'error'}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.button}>
                    <div>
                        <Button name={'SET'}
                                callBack={setButtonOnChange}
                                disabled={status !== 'setting'}/>
                    </div>
                </div>
            </div>
        )
    }
