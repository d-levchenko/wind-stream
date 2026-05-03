export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    weathercode: string;
    is_day: string;
  };
  current_weather: {
    time: string;
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
  };
}
