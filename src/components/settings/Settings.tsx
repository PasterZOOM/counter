import React from 'react';
import {Button} from '../button/Button';
import style from './Settings.module.css'
import {InputNumber} from '../input/InputNumber';

export type ScoreboardPropsType = {
    value: number
    startValue: number
    maxValue: number
    ChangeStartValue: (value: number) => void
    ChangeMaxValue: (value: number) => void


}

export const Settings: React.FC<ScoreboardPropsType> =
    ({value, startValue, maxValue, ChangeMaxValue, ChangeStartValue}) => {
        const error = maxValue <= startValue ? style.settingStringError : style.settingString
        return (
            <div className={style.setting}>
                <div className={style.values}>
                    <div className={error}>
                        <div className={style.inputName}>
                            MAX VALUE
                        </div>
                        <div>
                            <InputNumber callBack={ChangeMaxValue}
                                         value={maxValue}
                                         error={maxValue <= startValue}
                            />
                        </div>
                    </div>
                    <div className={error}>
                        <div className={style.inputName}>
                            START VALUE
                        </div>
                        <div>
                            <InputNumber callBack={ChangeStartValue}
                                         value={startValue}
                                         error={maxValue <= startValue}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.button}>
                    <div>
                        <Button name={'SET'}
                                callBack={() => {
                                }}
                                disabled={false}/>
                    </div>
                </div>
            </div>
        )
    }
