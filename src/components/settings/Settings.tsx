import React from 'react';
import {Button} from '../button/Button';
import style from './Settings.module.css'
import {InputNumber} from '../input/InputNumber';
import {StatusType} from '../../App';

export type ScoreboardPropsType = {
    startValue: number
    maxValue: number
    ChangeStartValue: (value: number) => void
    ChangeMaxValue: (value: number) => void
    status: StatusType
    setStatus: (value: StatusType) => void
    setCount:(startValue: number) => void
}

export const Settings: React.FC<ScoreboardPropsType> =
    ({startValue, maxValue, ChangeMaxValue, ChangeStartValue, setStatus, status,setCount}) => {

        if (maxValue <= startValue || startValue < 0) {
            setStatus('error')
        }
        const setButtonOnChange = () => {
            setStatus('counter')
            setCount(startValue)
        }

        return (

            <div className={style.setting}>
                <div className={style.values}>
                    <div className={style.settingString}>
                        <div className={style.inputName}>
                            MAX VALUE
                        </div>
                        <div>
                            <InputNumber callBack={ChangeMaxValue}
                                         value={maxValue}
                                         error={maxValue <= startValue || maxValue <= 0}
                            />
                        </div>
                    </div>
                    <div className={style.settingString}>
                        <div className={style.inputName}>
                            START VALUE
                        </div>
                        <div>
                            <InputNumber callBack={ChangeStartValue}
                                         value={startValue}
                                         error={status === 'error'}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.button}>
                    <div>
                        <Button name={'SET'}
                                callBack={setButtonOnChange}
                                disabled={status !== 'set'}/>
                    </div>
                </div>
            </div>
        )
    }
