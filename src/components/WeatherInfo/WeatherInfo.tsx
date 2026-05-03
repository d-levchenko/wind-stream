import type { SelectedLocation } from '../../types/SelectedLocation';
import type { WeatherData } from '../../types/weatherResponse';

import fetchWeather from '../../services/weather';
import { useEffect, useMemo, useState } from 'react';
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

  const currentIndex = useMemo(() => {
    if (!weather) return -1;

    const currentHour = weather.current_weather.time.slice(0, 13);

    return weather.hourly.time.findIndex(t => t.slice(0, 13) === currentHour);
  }, [weather]);

  const apparentTemp =
    currentIndex !== -1
      ? weather?.hourly.apparent_temperature[currentIndex]
      : null;

  const humidity =
    currentIndex !== -1
      ? weather?.hourly.relativehumidity_2m[currentIndex]
      : null;

  const precipitation =
    currentIndex !== -1 ? weather?.hourly.precipitation[currentIndex] : null;

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
        Humidity: {humidity} {weather?.hourly_units.relativehumidity_2m}
      </p>
      <p>
        Precipitation: {precipitation} {weather?.hourly_units.precipitation}
      </p>
      <p>
        Feels like: {apparentTemp} {weather?.hourly_units.apparent_temperature}
      </p>
    </div>
  );
};

export default WeatherInfo;
