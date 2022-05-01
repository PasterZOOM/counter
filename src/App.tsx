import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Scoreboard} from './components/scoreboard/Scoreboard';
import {Settings} from './components/settings/Settings';
import style from './App.module.css'

export type StatusType = 'counter' | 'set' | 'error'

function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [count, setCount] = useState<number>(startValue)
    let [status, setStatus] = useState<StatusType>('counter')

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        startValueAsString && setStartValue(JSON.parse(startValueAsString))

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

    const Inc = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const Reset = () => {
        setCount(startValue)
    }

    const ChangeStartValue = (value: number) => {
        setStartValue(value)
        setStatus('set')
    }
    const ChangeMaxValue = (value: number) => {
        setMaxValue(value)
        setStatus('set')
    }

    return (
        <div className={style.general}>
            <div>
                <Settings startValue={startValue}
                          maxValue={maxValue}
                          ChangeStartValue={ChangeStartValue}
                          ChangeMaxValue={ChangeMaxValue}
                          status={status}
                          setStatus={setStatus}
                />
            </div>
            <div>
                <Scoreboard value={count}
                            startValue={startValue}
                            maxValue={maxValue}
                            Inc={Inc}
                            Reset={Reset}
                            status={status}
                />
            </div>
        </div>
    );
}

export default App;
