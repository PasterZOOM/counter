import {combineReducers, legacy_createStore as createStore} from 'redux';
import {countReducer} from './countReducer';
import {statusReducer} from './statusReducer';
import {startValueReducer} from './startValueReducer';
import {maxValueReducer} from './maxValueReducer';
import {loadState, saveState} from '../utils/localStorageUtil';


const rootReducer = combineReducers({
    count: countReducer,
    status: statusReducer,
    startValue: startValueReducer,
    maxValue: maxValueReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        count: store.getState().count,
        status:store.getState().status,
        startValue:store.getState().startValue,
        maxValue:store.getState().maxValue
    })
})

type AppStoreType = typeof store

export type AppStateType = ReturnType<typeof rootReducer>