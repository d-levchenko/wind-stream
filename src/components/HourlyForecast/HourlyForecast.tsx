import type { WeatherData } from '../../types/weatherResponse';

interface HourlyForecastProps {
  weather: WeatherData | null;
}

const HourlyForecast = ({ weather }: HourlyForecastProps) => {
  const getHour = (hour: string) => {
    return new Date(hour).getHours();
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur sm:p-8">
      <h2 className="text-xl font-semibold sm:text-2xl">Hourly Forecast</h2>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {weather?.hourly.time.map((hour, index) => (
          <div
            key={hour}
            className="min-w-22.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
            <p className="text-xs font-medium text-white/60 sm:text-sm">
              {getHour(hour)}:00
            </p>
            <p className="mt-1 text-base font-semibold sm:text-lg">
              {weather.hourly.temperature_2m[index]}
              <span className="text-white/60">
                {weather.hourly_units.temperature_2m}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
