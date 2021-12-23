import "./WeatherTemperature.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props) {
  let celsiusTemp = Math.round(props.data.temperature);
  let celsiusMinTemp = Math.round(props.data.minTemperature);
  let celsiusMaxTemp = Math.round(props.data.maxTemperature);
  let celsiusFeelsLike = Math.round(props.data.feelsLike);
  let windKmH = Math.round(props.data.wind * 3.6);
  
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
                °C 
              </span>
              <br />
              <span className="minMaxTemp">
                min: {celsiusMinTemp}°
                <br />
                max: {celsiusMaxTemp}°
              </span>
            </div>
            <div className="temperature-description text-start">
              <ul>
                <li>Feels like: {celsiusFeelsLike}°</li>
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
}