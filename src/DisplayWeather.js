import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./DisplayWeather.css"
import FormattedDate from "./FormattedDate";

export default function DisplayWeather(props) {
  const currentCityIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({loaded: false});
  let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
}

  function handleResponse(response) {
    setWeatherInfo({
        loaded: true,
        cityName: response.data.name,
        dateHour: new Date(response.data.dt * 1000),
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        minTemperature: Math.round(response.data.main.temp_min),
        maxTemperature: Math.round(response.data.main.temp_max),
        feelsLike: Math.round(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        wind: Math.round(3.6 * response.data.wind.speed),
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    }); 
  }
  
  if (weatherInfo.loaded) { 
    return (
      <div className="displayWeather">
        <div className="row">
          <div className="col-5">
            <h2 className="city">{weatherInfo.cityName}</h2>
            <h4 className="currentDate"><FormattedDate date={weatherInfo.dateHour} /></h4>
            <h3 className="weatherDescription text-capitalize">
              {weatherInfo.description}
            </h3>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
          </div>
          <div className="col-3 d-flex align-items-center">
            <h1>{weatherInfo.temperature}°C | F</h1>
          </div>
          <div className="col-4">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a City"
                onChange={updateCity}
                className="cityInput"
              />
              <button type="submit">{searchIcon}</button>
              <button>{currentCityIcon}</button>
            </form>
            <ul>
              <li>Feels like: {weatherInfo.feelsLike}°</li>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {weatherInfo.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="row text-center d-flex justify-content-around">
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
            <p className="forecastTemperature">{weatherInfo.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
            <p className="forecastTemperature">{weatherInfo.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
            <p className="forecastTemperature">{weatherInfo.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
            <p className="forecastTemperature">{weatherInfo.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img src={weatherInfo.icon} alt={weatherInfo.description} />
            <p className="forecastTemperature">{weatherInfo.temperature}</p>
          </div>
        </div>
      </div>
    );
  } else {
        let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading weather info..."
  }
}
