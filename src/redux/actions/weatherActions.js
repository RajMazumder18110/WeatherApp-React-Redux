import axios from 'axios'
import { FETCH_WEATHER } from '../constrants'

const WeatherData = details =>{
    return {
        type: FETCH_WEATHER,
        payload: details
    }
}

export const fetchWeather = city => {
    return async dispatch =>{
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93e33d69927797c13f5704ba4b0666ff`)
        .then(response =>{
            dispatch(WeatherData(response.data))
        })
        .catch(error =>{
            console.log('Fetch Error', error.message)
        })
    }
}