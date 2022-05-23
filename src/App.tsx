import React from 'react';
import './App.module.css';
import {Scoreboard} from './components/scoreboard/Scoreboard';
import {Settings} from './components/settings/Settings';
import style from './App.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './state/store';
import {incAC, resetAC, setMaxValueAC, setSetAC, setStartValueAC} from './state/counterReducer';

export type StatusType = 'counter' | 'setting' | 'error'

function App() {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const status = useSelector<AppStateType, StatusType>(state => state.counter.status)
    const counterDispatch = useDispatch()


    const Reset = () => counterDispatch(resetAC(startValue))
    const Inc = () => count < maxValue && counterDispatch(incAC())

    const ChangeStartValue = (value: number) => {
        value > 9999 ? counterDispatch(setStartValueAC(9999)) :
            counterDispatch(setStartValueAC(value))
        counterDispatch(setSetAC())
    }
    const ChangeMaxValue = (value: number) => {
        value > 9999 ? counterDispatch(setMaxValueAC(9999)) :
            counterDispatch(setMaxValueAC(value))
        counterDispatch(setSetAC())
    }

    return (
        <div className={style.general}>
            <div>
                <Settings status={status}
                          maxValue={maxValue}
                          startValue={startValue}
                          counterDispatch={counterDispatch}
                          ChangeMaxValue={ChangeMaxValue}
                          ChangeStartValue={ChangeStartValue}
                />
            </div>
            <div>
                <Scoreboard count={count}
                            status={status}
                            maxValue={maxValue}
                            startValue={startValue}
                            Inc={Inc}
                            Reset={Reset}
                />
            </div>
        </div>
    );
}

export default App;
