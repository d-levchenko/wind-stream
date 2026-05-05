import type { WeatherData } from '../../types/weatherResponse';

interface DailyForecastProps {
  weather: WeatherData | null;
}

const DailyForecast = ({ weather }: DailyForecastProps) => {
  const getDayName = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
    });
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur sm:p-8">
      <h2 className="text-xl font-semibold sm:text-2xl">Daily Forecast</h2>

      {weather && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {weather.daily.time.map((day, index) => (
            <div
              key={day}
              className="min-w-27.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
              <p className="text-xs font-medium text-white/60 sm:text-sm">
                {getDayName(day).slice(0, 3)}
              </p>

              <p className="mt-1 text-base font-semibold sm:text-lg">
                {weather.daily.temperature_2m_min[index]}
                <span className="text-white/60">
                  {weather.daily_units.temperature_2m_min}
                </span>
              </p>

              <p className="text-sm font-semibold text-white/80 sm:text-base">
                {weather.daily.temperature_2m_max[index]}
                <span className="text-white/60">
                  {weather.daily_units.temperature_2m_max}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
