import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer'

export const rootReducer = combineReducers({
    Weather: weatherReducer
})