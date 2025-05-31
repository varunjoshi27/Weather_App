import { useState } from 'react';
import Infobox from './Infobox';
import Searchbox from './Searchbox';

export default function WeatherApp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: 'Delhi',
    feelslike: 26.9,
    humidity: 13,
    temp: 28.38,
    tempMax: 28.38,
    tempMin: 28.38,
    weather: 'clear sky',
  });
  let updateInfo = (newInfo) => {
    setweatherinfo(newInfo);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather App</h2>
      <Searchbox updateInfo={updateInfo} />
      <Infobox info={weatherinfo} />
    </div>
  );
}
