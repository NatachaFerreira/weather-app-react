import React, { useState } from "react";
import "./WeatherTemperature.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props) {
  let celsiusTemp = Math.round(props.data.temperature);
  let fahrenheitTemp = Math.round((props.data.temperature * 9) / 5 + 32);
  let celsiusMinTemp = Math.round(props.data.minTemperature);
  let celsiusMaxTemp = Math.round(props.data.maxTemperature);
  let fahrenheitMinTemp = Math.round((props.data.minTemperature * 9) / 5 + 32);
  let fahrenheitMaxTemp = Math.round((props.data.maxTemperature * 9) / 5 + 32);
  let celsiusFeelsLike = Math.round(props.data.feelsLike);
  let fahrenheitFeelsLike = Math.round((props.data.feelsLike * 9) / 5 + 32);
  let windKmH = Math.round(props.data.wind * 3.6);
  let windMph = Math.round(props.data.wind * 2.236936);
  const [unit, setUnit] = useState("celsius");

  function unitToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function unitToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <div className="row mt-5">
            <h2 className="city text-end">{props.data.cityName}</h2>
            <h4 className="currentDate text-end mb-5">
              <FormattedDate date={props.data.dateHour} />
            </h4>
          </div>
        <div className="row">
          <div className="col-7 text-center">
            <div className="temperature">{celsiusTemp}</div>
            <div className="temperature-info">
              <span className="unit">
                {" "}
                °C |{" "}
                <a href="/" onClick={unitToFahrenheit}>
                  {" "}
                  °F
                </a>
              </span>
              <br />
              <span className="minMaxTemp">
                min: {celsiusMinTemp}°C
                <br />
                max: {celsiusMaxTemp}°C
              </span>
            </div>
            <div className="temperature-description text-start">
              <ul>
                <li>Feels like: {celsiusFeelsLike}°C</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {windKmH}km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-5 weather-info">
            <p className="weatherDescription text-capitalize text-end">
              {props.data.description}
            </p>
            <br />
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="130%"
              className="icon"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <div className="row mt-5">
          <h2 className="city text-end">{props.data.cityName}</h2>
          <h4 className="currentDate text-end mb-5">
            <FormattedDate date={props.data.dateHour} />
          </h4>
        </div>
        <div className="row">
          <div className="col-7 text-center">
            <div className="temperature">{fahrenheitTemp}</div>
            <div className="temperature-info">
              <span className="unit">
                °F |&nbsp;
                <a href="/" onClick={unitToCelsius}>
                  °C
                </a>
              </span>
              <div className="minMaxTemp">
                min:{fahrenheitMinTemp}°F
                <br />
                max:{fahrenheitMaxTemp}°F
              </div>
            </div>
            <div className="temperature-description text-start">
              <ul>
                <li>Feels like: {fahrenheitFeelsLike}°F</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {windMph}mph</li>
              </ul>
            </div>
          </div>
          <div className="col-5 weather-info">
            <p className="weatherDescription text-capitalize text-end">
              {props.data.description}
            </p>
            <br />
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="130%"
              className="icon"
            />
          </div>
        </div>
      </div>
    );
  } 
}