import type { SelectedLocation } from '../../types/SelectedLocation';
import type { WeatherData } from '../../types/weatherResponse';

import { useMemo } from 'react';

interface WeatherInfoProps {
  location: SelectedLocation;
  weather: WeatherData | null;
}

const WeatherInfo = ({ location, weather }: WeatherInfoProps) => {
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
    <div className="text-white p-8 flex flex-col gap-4">
      <div className="flex justify-between items-center bg-[#322bac] p-10 rounded-md">
        <p className="text-3xl">
          {location.name}, {location.country}
        </p>
        <p className="text-2xl">
          {weather?.current_weather.temperature}{' '}
          {weather?.current_weather_units.temperature}
        </p>
      </div>
      <div className="flex gap-3">
        <p className="flex flex-col gap-1 bg-[#25253f] py-2 px-3 rounded-md">
          Feels like
          <span>
            {apparentTemp} {weather?.hourly_units.apparent_temperature}
          </span>
        </p>
        <p className="flex flex-col gap-1 bg-[#25253f] py-2 px-3 rounded-md">
          Wind
          <span>
            {weather?.current_weather.windspeed}{' '}
            {weather?.current_weather_units.windspeed}
          </span>
        </p>
        <p className="flex flex-col gap-1 bg-[#25253f] py-2 px-3 rounded-md">
          Humidity
          <span>
            {humidity} {weather?.hourly_units.relativehumidity_2m}
          </span>
        </p>
        <p className="flex flex-col gap-1 bg-[#25253f] py-2 px-3 rounded-md">
          Precipitation
          <span>
            {precipitation} {weather?.hourly_units.precipitation}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;
