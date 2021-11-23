import React from "react";

export default function WeatherDescription(props) {
    return (
      <div className="weatherDescription">
        <ul>
          <li>Feels like: {props.data.feelsLike}°</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    );
}