import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Scoreboard} from './components/scoreboard/Scoreboard';
import {Settings} from './components/settings/Settings';
import style from './App.module.css'

export type StatusType = 'counter' | 'setting' | 'error'

function App() {

    let [status, setStatus] = useState<StatusType>('setting')
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [count, setCount] = useState<number>(startValue)

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
            setCount(JSON.parse(startValueAsString))
        }

        let maxValueAsString = localStorage.getItem('maxValue')
        maxValueAsString && setMaxValue(JSON.parse(maxValueAsString))

        let statusAsString = localStorage.getItem('status')
        statusAsString && setStatus(JSON.parse(statusAsString))

    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('status', JSON.stringify(status))
    }, [startValue, maxValue, status])

    const Reset = () => setCount(startValue)
    const Inc = () => count < maxValue && setCount(count + 1)

    const ChangeStartValue = (value: number) => {
        value > 9999 ? setStartValue(9999) :
            setStartValue(value)
        setStatus('setting')
    }
    const ChangeMaxValue = (value: number) => {
        value > 9999 ? setMaxValue(9999) :
            setMaxValue(value)
        setStatus('setting')
    }

    return (
        <div className={style.general}>
            <div>
                <Settings status={status}
                          maxValue={maxValue}
                          startValue={startValue}
                          setCount={setCount}
                          setStatus={setStatus}
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
