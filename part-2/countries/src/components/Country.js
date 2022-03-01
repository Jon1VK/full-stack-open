import { useEffect, useState } from "react";
import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${WEATHER_API_KEY}`
      )
      .then((response) => setWeatherData(response.data));
  }, []);

  return (
    <div>
      <h2>{country.name.common}</h2>

      <table>
        <thead>
          <tr>
            <td>capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>area</td>
            <td>{country.area}</td>
          </tr>
        </thead>
      </table>

      <p>
        <b>Languages:</b>
      </p>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      <h3>Weather in {country.capital}</h3>

      {weatherData !== null ? (
        <div>
          <p>temperature {weatherData.main.temp} Celsius</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Fetching weather data</p>
      )}
    </div>
  );
};

export default Country;
