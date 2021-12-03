import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast(props) {

    return (
      <div className="weatherInfo">
        <div className="row text-center d-flex justify-content-around">
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="100%"
            />
            <p className="forecastTemperature">{props.data.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="100%"
            />
            <p className="forecastTemperature">{props.data.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="100%"
            />
            <p className="forecastTemperature">{props.data.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="100%"
            />
            <p className="forecastTemperature">{props.data.temperature}</p>
          </div>
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <WeatherIcon
              code={props.data.iconCode}
              description={props.data.description}
              size="100%"
            />
            <p className="forecastTemperature">{props.data.temperature}</p>
          </div>
        </div>
      </div>
    );
}