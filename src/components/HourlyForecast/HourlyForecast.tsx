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

      <div className="mt-5 max-h-105 overflow-y-auto pr-2">
        <div className="flex flex-col gap-3">
          {weather?.hourly.time.slice(0, 24).map((hour, index) => (
            <div
              key={hour}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm font-medium text-white/70">
                {getHour(hour)}:00
              </span>

              <span className="text-sm font-semibold">
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
