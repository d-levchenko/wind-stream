import SearchCity from '../SearchCity/SearchCity';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import DailyForecast from '../DailyForecast/DailyForecast';

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
    <div className="flex justify-center items-center flex-col p-10">
      <h1 className="text-white text-4xl p-2">How's the sky looking today?</h1>
      <SearchCity onSelectLocation={setLocation} />
      {location && weather && (
        <>
          <WeatherInfo location={location} weather={weather} />
          <DailyForecast weather={weather} />
        </>
      )}
    </div>
  );
};

export default App;
