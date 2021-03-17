import React, { useRef } from 'react'
import '../scss/WeatherContainer.scss'

import { fetchWeather } from '../redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    // console.log(state.Weather.weatherData)
    return {
        data: state.Weather.weatherData
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchWeather: city => dispatch(fetchWeather(city))
    }
}
const getDate = () =>{
    const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday']
    const d = new Date()
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}


const WeatherContainer = (props) => {
    const cityRef = useRef()
    const onSubmit = e => {
        e.preventDefault()
        props.fetchWeather(cityRef.current.value)
        cityRef.current.value = ''
    }
    return (
        <div className="WeatherContainer">
            <form onSubmit={e =>{onSubmit(e)}}>
                <input type="text" id="city" placeholder="Enter any city" ref={cityRef}/>
                <button type='submit'><i className="fas fa-search"></i></button>
            </form>
            <div className="details">
                <div className="content">
                    {
                        (typeof props.data.main !== 'undefined') ?
                        <>
                            <p>{props.data.name}, {props.data.sys.country}</p>
                            <h1 className="date">{getDate()}</h1>
                            <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`} alt="Icon"/>
                            <h1 className="temp">{Math.round(props.data.main.temp - 273.15)}°C</h1>
                            <h1 className="weather">{props.data.weather[0].main}</h1>
                            <div className="wind">
                                <i className="fas fa-wind"><span>{props.data.wind.speed} m/h</span></i>
                                <i className="fas fa-tint"><span>{props.data.main.humidity}%</span></i>
                            </div>
                        </> :
                        <>
                            <h1 className="title">Weather App</h1>
                            <h1 className="enter">Please Enter Any city</h1>
                        </>
                    }
                    <p className="developer">- Raj Mazumder</p>     
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
