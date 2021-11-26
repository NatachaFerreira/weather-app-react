import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./DisplayWeather.css"
import CityDate from "./CityDate";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDescription from "./WeatherDescription";
import WeatherForecast from "./WeatherForecast";


export default function DisplayWeather(props) {
  const currentCityIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  function search() {
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
}

  function handleResponse(response) {
    setWeatherData({
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
      iconCode : response.data.weather[0].icon,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    }); 
  }
  
  if (weatherData.loaded) {
    return (
      <div className="displayWeather">
        <div className="row">
          <div className="col-6">
            <CityDate data={weatherData} />
          </div>
          <div className="col-6">
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
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col-4 d-flex align-items-center">
            <WeatherTemperature data={weatherData} />
          </div>
          <div className="col-4">
            <WeatherDescription data={weatherData} />
          </div>
        </div>
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading weather info...";
  }
}
