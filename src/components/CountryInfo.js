import axios from "axios"
import { useState, useEffect } from 'react'

const Weather = (props) => {
    return (
        <>
        <h2>Weather in {props.capital}, {props.name}</h2>
        <p>temperature {props.temp}</p>
        <p>wind {props.wind}</p>
        </>
    )
}

const CountryInfo = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]

    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=imperial`)
          .then(response => {
            const newWeather = response.data
            setWeather([newWeather])
          })
          console.log(weather)
    }, [])  

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>area: {country.area}</p>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png}/>
            {weather.length > 0 ? <Weather capital={country.capital} name={country.name.common} temp={weather[0].main.temp} wind={weather[0].wind.speed}/> : <></>}
        </div>
    )
}

export default CountryInfo;