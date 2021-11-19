import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

export default function DisplayWeather() {
  const currentCityIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [city, setCity] = useState("");
  const [typedCity, setTypedCity] = useState("");
  const [weather, setWeather] = useState(null);
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
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }
  
  
  if (loaded) {
    return (
      <div className="displayWeather">
        <Container>
          <Row>
            <Col xs={4}>
              <h2 className="mockupCity">{typedCity}</h2>
              <h4 className="currentDate">Wednesday 09:20</h4>
              <h3 className="weatherDescription">{weather.description}</h3>
              <img src={weather.icon} alt={weather.description} />
            </Col>
            <Col xs={2}>
              <h1>{weather.temperature}°C | F</h1>
            </Col>
            <Col xs={6}>
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
                <li>Feels like: °</li>
                <li>Humidity: %</li>
                <li>Wind: km/h</li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={2}>
              <p className="forecastDay">Saturday</p>
              <img src={weather.icon} alt={weather.description} />
              <p className="forecastTemperature">{weather.temperature}</p>
            </Col>
            <Col xs={2}>
              <p className="forecastDay">Saturday</p>
              <img src={weather.icon} alt={weather.description} />
              <p className="forecastTemperature">{weather.temperature}</p>
            </Col>
            <Col xs={2}>
              <p className="forecastDay">Saturday</p>
              <img src={weather.icon} alt={weather.description} />
              <p className="forecastTemperature">{weather.temperature}</p>
            </Col>
            <Col xs={2}>
              <p className="forecastDay">Saturday</p>
              <img src={weather.icon} alt={weather.description} />
              <p className="forecastTemperature">{weather.temperature}</p>
            </Col>
            <Col xs={2}>
              <p className="forecastDay">Saturday</p>
              <img src={weather.icon} alt={weather.description} />
              <p className="forecastTemperature">{weather.temperature}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="displayWeather">
        <Container>
          <Row>
            <Col xs={6}>
              <h2 className="Angra do Heroísmo">Angra do Heroísmo</h2>
              <h4 className="current-date">Wednesday 09:20</h4>
              <h3 className="weather-description">Sunny</h3>
              <img src="#" alt={"#"} />
            </Col>
            <Col xs={6}>
              <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Type a City" onChange={updateCity} />
                <button type="submit" >
                  {searchIcon}
                </button>
                <button>{currentCityIcon}</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
