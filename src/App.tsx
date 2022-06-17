import React from 'react';
import './App.module.css';
import {Scoreboard} from './components/scoreboard/Scoreboard';
import {Settings} from './components/settings/Settings';
import style from './App.module.css'

export type StatusType = 'counter' | 'setting' | 'error'

function App() {
    return (
        <div className={style.general}>
            <div>
                <Settings/>
            </div>
            <div>
                <Scoreboard/>
            </div>
        </div>
    )
}

export default App