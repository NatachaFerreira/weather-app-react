import React from "react";

export default function WeatherTemperature(props) {
    return (
      <div className="weatherTemperature">
        <h1>{props.data.temperature}°C | F</h1>
      </div>
    );
}