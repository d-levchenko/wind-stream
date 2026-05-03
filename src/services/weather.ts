import axios from 'axios';
import type { WeatherData } from '../types/weatherResponse';

const API_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = async (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(API_URL, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      forecast_days: 7,
      timezone: 'auto',
    },
  });

  return data;
};

export default fetchWeather;
