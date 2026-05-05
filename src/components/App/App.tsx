import SearchCity from '../SearchCity/SearchCity';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';

import type { SelectedLocation } from '../../types/SelectedLocation';
import type { WeatherData } from '../../types/weatherResponse';

import fetchWeather from '../../services/weather';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const App = () => {
  const [location, setLocation] = useState<SelectedLocation | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      if (!location) return;

      try {
        const data = await fetchWeather(location.latitude, location.longitude);
        setWeather(data);
      } catch {
        toast.error(`Error: something went wrong while loading weather`);
      }
    };

    loadWeather();
  }, [location]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          How&apos;s the sky looking today?
        </h1>

        <div className="mt-8 w-full">
          <SearchCity onSelectLocation={setLocation} />
        </div>

        {location && weather && (
          <div className="mt-8 flex w-full flex-col gap-8">
            <WeatherInfo location={location} weather={weather} />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <DailyForecast weather={weather} />
              <HourlyForecast weather={weather} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
