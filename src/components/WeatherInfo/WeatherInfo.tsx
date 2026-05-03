import type { SelectedLocation } from '../../types/SelectedLocation';
import type { WeatherData } from '../../types/weatherResponse';

import fetchWeather from '../../services/weather';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface WeatherInfoProps {
  location: SelectedLocation;
}

const WeatherInfo = ({ location }: WeatherInfoProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather(location.latitude, location.longitude);

        setWeather(data);
      } catch {
        toast.error(`Error: something went wrong while loading weather`);
      }
    };

    loadWeather();
  }, [location.latitude, location.longitude]);

  return (
    <div>
      <h2>Weather Info</h2>
      <p>Name: {location.name}</p>
      <p>
        Temperature: {weather?.current_weather.temperature}{' '}
        {weather?.current_weather_units.temperature}
      </p>
      <p>
        Windspeed: {weather?.current_weather.windspeed}{' '}
        {weather?.current_weather_units.windspeed}
      </p>
      <p>
        Humidity: {weather?.hourly.relativehumidity_2m[0]}{' '}
        {weather?.hourly_units.relativehumidity_2m}
      </p>
      <p>
        Precipitation: {weather?.hourly.precipitation[0]}{' '}
        {weather?.hourly_units.precipitation}
      </p>
      <p>
        Feels like: {weather?.hourly.apparent_temperature[0]}{' '}
        {weather?.hourly_units.apparent_temperature}
      </p>
    </div>
  );
};

export default WeatherInfo;
