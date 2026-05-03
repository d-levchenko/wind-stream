import axios from 'axios';
import type { WeatherData } from '../types/weatherResponse';

const API_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = async (
  latitude: number,
  longitude: number,
  unit: 'celsius' | 'fahrenheit' = 'celsius',
): Promise<WeatherData> => {
  const { data } = await axios.get<WeatherData>(API_URL, {
    params: {
      latitude,
      longitude,
      current_weather: true,

      timezone: 'auto',
      hourly: [
        'temperature_2m',
        'apparent_temperature',
        'relativehumidity_2m',
        'precipitation',
      ].join(','),

      daily: [
        'temperature_2m_max',
        'temperature_2m_min',
        'precipitation_sum',
      ].join(','),

      temperature_unit: unit === 'celsius' ? 'celsius' : 'fahrenheit',
    },
  });

  return data;
};

export default fetchWeather;
