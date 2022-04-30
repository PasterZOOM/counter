import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Scoreboard} from './components/scoreboard/Scoreboard';
import {Settings} from './components/settings/Settings';
import style from './App.module.css'


function App() {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [count, setCount] = useState<number>(startValue)


    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])


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
    }
    const ChangeMaxValue = (value: number) => {
        setMaxValue(value)
    }


    return (
        <div className={style.general}>
            <div>
                <Settings value={count}
                          startValue={startValue}
                          maxValue={maxValue}
                          ChangeStartValue={ChangeStartValue}
                          ChangeMaxValue={ChangeMaxValue}
                />
            </div>
            <div>
                <Scoreboard value={count}
                            startValue={startValue}
                            maxValue={maxValue}
                            Inc={Inc}
                            Reset={Reset}
                />
            </div>
        </div>
    );
}

export default App;
