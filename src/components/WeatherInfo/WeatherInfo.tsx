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
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="text-xl font-semibold sm:text-2xl lg:text-3xl">
          {location.name},{' '}
          <span className="text-white/70">{location.country}</span>
        </p>

        <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {weather?.current_weather.temperature}{' '}
          <span className="text-lg font-medium text-white/70 sm:text-xl">
            {weather?.current_weather_units.temperature}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur">
          <p className="text-sm text-white/70">Feels like</p>
          <p className="mt-1 text-lg font-semibold sm:text-xl">
            {apparentTemp} {weather?.hourly_units.apparent_temperature}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur">
          <p className="text-sm text-white/70">Wind</p>
          <p className="mt-1 text-lg font-semibold sm:text-xl">
            {weather?.current_weather.windspeed}{' '}
            {weather?.current_weather_units.windspeed}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur">
          <p className="text-sm text-white/70">Humidity</p>
          <p className="mt-1 text-lg font-semibold sm:text-xl">
            {humidity} {weather?.hourly_units.relativehumidity_2m}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur">
          <p className="text-sm text-white/70">Precipitation</p>
          <p className="mt-1 text-lg font-semibold sm:text-xl">
            {precipitation} {weather?.hourly_units.precipitation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
