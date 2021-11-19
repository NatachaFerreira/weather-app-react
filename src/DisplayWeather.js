import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function DisplayWeather() {
  const currentCityIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [city, setCity] = useState("");
  const [typedCity, setTypedCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  
  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTypedCity(`${city}`);
    
    axios.get(apiUrl).then(handleResponse);
}

  function handleResponse(response) {
      console.log(response);
    setWeatherInfo({
      dateHour: formatDate(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      minTemperature: Math.round(response.data.main.temp_min),
      maxTemperature: Math.round(response.data.main.temp_max),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(3.6 * response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    }); 
    setLoaded(true);
  }
  
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[date.getMonth()];
    let hours = date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    return `${day}, ${date.getDate()} ${month} ${hours}:${minutes}`;
  }

  if (loaded) { 
    return (
      <div className="displayWeather">
        
          <div className="row">
            <div className="col-4">
              <h2 className="city">{typedCity}</h2>
              <h4 className="currentDate">{weatherInfo.dateHour}</h4>
              <h3 className="weatherDescription">{weatherInfo.description}</h3>
              <img src={weatherInfo.icon} alt={weatherInfo.description} />
            </div>
            <div className="col-2">
              <h1>{weatherInfo.temperature}°C | F</h1>
            </div>
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Type a City"
                  onChange={updateCity}
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
          <div className="row text-center">
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
        let city = "Angra do Heroísmo"
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading weather info..."
  }
}
