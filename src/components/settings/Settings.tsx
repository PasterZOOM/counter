import React, {useCallback, useEffect} from 'react'
import {Button} from '../button/Button'
import style from './Settings.module.css'
import {InputNumber} from '../input/InputNumber'
import {resetAC, setCounterAC, setErrorAC, setMaxValueAC, setSetAC, setStartValueAC} from '../../state/counterReducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../state/store'
import {StatusType} from '../../App'


export const Settings = () => {

    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const dispatch = useDispatch()

    useEffect(() => {
        ((maxValue <= startValue || startValue < 0 || maxValue <= 0) && status !== 'error') && dispatch(setErrorAC())
    }, [status, maxValue, startValue, dispatch])

    const ChangeStartValue = useCallback((value: number) => {
        value > 9999 ? dispatch(setStartValueAC(9999)) : dispatch(setStartValueAC(value))
        status !== 'setting' && dispatch(setSetAC())
    }, [dispatch, status])
    const ChangeMaxValue = useCallback((value: number) => {
        value > 9999 ? dispatch(setMaxValueAC(9999)) : dispatch(setMaxValueAC(value))
        status !== 'setting' && dispatch(setSetAC())
    }, [dispatch, status])

    const setButtonOnChange = useCallback(() => {
        dispatch(setCounterAC())
        dispatch(resetAC(startValue))
    }, [dispatch, startValue])

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
