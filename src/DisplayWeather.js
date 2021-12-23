import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./DisplayWeather.css"
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";


export default function DisplayWeather(props) {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  
  
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
      coords: response.data.coord,
      dateHour: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconCode : response.data.weather[0].icon,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    }); 
  }
  
  if (weatherData.loaded) {
    return (
      <div className="displayWeather">
        <div className="row text-center search-box">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a City..."
              onChange={updateCity}
              className="cityInput"
            />
            <button type="submit">{searchIcon}</button>
          </form>
        </div>
        <WeatherTemperature data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();

    return "Loading weather info...";
  }
}
