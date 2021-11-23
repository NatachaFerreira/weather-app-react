import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <h3 className="weatherDescription text-capitalize">
              {props.data.description}
            </h3>
            <img src={props.data.icon} alt={props.data.description} />
          </div>
    );
}