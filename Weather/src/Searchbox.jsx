import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';
export default function Searchbox({ updateInfo }) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'cf6a4de4f5706e426ee64c400738d950';

  let getWeatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = await fetch(
        `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity('');
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="SearchBox">
        <h1></h1>
        <form onSubmit={handleSubmit}>
          <TextField
            id="City"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" type="Submit">
            Search
          </Button>
          {error && <p style={{ color: 'red' }}> No such Place Exist</p>}
        </form>
      </div>
    </>
  );
}
