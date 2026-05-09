import SearchCity from '../SearchCity/SearchCity';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import Header from '../Header/Header';

import type { SelectedLocation } from '../../types/SelectedLocation';
import type { WeatherData } from '../../types/weatherResponse';

import fetchWeather from '../../services/weather';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Footer from '../Footer/Footer';

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
    <div className="mx-auto flex w-full xl:max-w-7xl md:max-w-3xl max-w-93.75 flex-1 flex-col px-4 py-6 md:px-8 md:py-10">
      <Header />

      <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
        How&apos;s the sky looking today?
      </h1>

      <div className="mt-8 flex w-full justify-center">
        <SearchCity onSelectLocation={setLocation} />
      </div>

      {location && weather && (
        <div className="mt-10 flex w-full flex-col gap-8 xl:flex-row xl:items-stretch">
          <div className="flex w-full flex-col gap-8 xl:flex-1">
            <WeatherInfo location={location} weather={weather} />
            <DailyForecast weather={weather} />
          </div>

          <div className="flex w-full xl:w-85">
            <HourlyForecast weather={weather} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
