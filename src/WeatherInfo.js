import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
      <div className="weatherInfo">
        <h3 className="weatherDescription text-capitalize">
          {props.data.description}
        </h3>
        <WeatherIcon
          code={props.data.iconCode}
          description={props.data.description}
          size="130%"
        />
      </div>
    );
}