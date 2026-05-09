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
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-linear-to-br from-indigo-500/20 via-white/5 to-transparent p-6 shadow-lg backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10 md:flex-row md:items-center md:justify-between md:p-8">
        <p className="text-xl font-semibold text-white md:text-2xl xl:text-3xl">
          {location.name},{' '}
          <span className="text-white/70">{location.country}</span>
        </p>

        <p className="text-4xl font-bold text-white md:text-5xl">
          {weather?.current_weather.temperature}{' '}
          <span className="text-xl font-medium text-white/60">
            {weather?.current_weather_units.temperature}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-3 md:gap-4">
        <div className="flex min-w-37.5 flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
          <p className="text-sm text-white/70">Feels like</p>
          <p className="text-lg font-semibold text-white md:text-xl">
            {apparentTemp} {weather?.hourly_units.apparent_temperature}
          </p>
        </div>

        <div className="flex min-w-37.5 flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
          <p className="text-sm text-white/70">Wind</p>
          <p className="text-lg font-semibold text-white md:text-xl">
            {weather?.current_weather.windspeed}{' '}
            {weather?.current_weather_units.windspeed}
          </p>
        </div>

        <div className="flex min-w-37.5 flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
          <p className="text-sm text-white/70">Humidity</p>
          <p className="text-lg font-semibold text-white md:text-xl">
            {humidity} {weather?.hourly_units.relativehumidity_2m}
          </p>
        </div>

        <div className="flex min-w-37.5 flex-1 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg">
          <p className="text-sm text-white/70">Precipitation</p>
          <p className="text-lg font-semibold text-white md:text-xl">
            {precipitation} {weather?.hourly_units.precipitation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
