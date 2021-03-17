import { FETCH_WEATHER } from '../constrants'

const initialstate = {
    weatherData: {}
}

export const weatherReducer = (state = initialstate, action) =>{
    switch(action.type){
        case FETCH_WEATHER: return{
            ...state,
            weatherData: action.payload
        }
        default: return state
    }
}