import React from "react";


export default function WeatherForecast(props) {

    return (
      <div className="weatherInfo">
        <div className="row text-center d-flex justify-content-around">
          <div className="col-2">
            <p className="forecastDay">Saturday</p>
            <img
              src={props.data.icon}
              alt={props.data.description}
            />
            <p className="forecastTemperature">
              {props.data.temperature}
            </p>
          </div>
         
          
        </div>
      </div>
    );
}