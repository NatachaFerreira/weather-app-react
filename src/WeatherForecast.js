import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coords]);

  function load() {
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let latitude = props.data.coords.lon;
    let longitude = props.data.coords.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if(loaded) {
    return (
      <div className="weatherInfo">
        <div className="row text-center d-flex justify-content-around">
          {forecastData.map(function(dailyForecast, index) {
            if(index < 6) {
            return (
              <div className="col-2" key={index}>
                <WeatherForecastDay
                  data={dailyForecast}
                />
              </div>
            );
          } else {
            return null;
          }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
    
    
}