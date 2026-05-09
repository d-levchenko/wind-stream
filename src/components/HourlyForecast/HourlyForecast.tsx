import type { WeatherData } from '../../types/weatherResponse';
import getWeatherIcon from '../../utils/getWeatherIcon';

interface HourlyForecastProps {
  weather: WeatherData | null;
}

const HourlyForecast = ({ weather }: HourlyForecastProps) => {
  const getHour = (hour: string) => {
    return new Date(hour).getHours();
  };

  return (
    <div className="flex w-full flex-col rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 shadow-lg backdrop-blur md:p-8 max-h-128">
      <h2 className="text-xl font-semibold text-white md:text-2xl">
        Hourly Forecast
      </h2>

      <div className="mt-5 flex-1 min-h-0 overflow-y-auto pr-2 max-h-105 w-75">
        <div className="flex flex-col gap-3">
          {weather?.hourly.time.slice(0, 24).map((hour, index) => (
            <div
              key={hour}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-md">
              <span className="text-sm font-medium text-white/70">
                {getHour(hour)}:00
              </span>

              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                {getWeatherIcon(weather.hourly.weather_code[index])}
                {weather.hourly.temperature_2m[index]}
                <span className="text-white/60">
                  {weather.hourly_units.temperature_2m}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
