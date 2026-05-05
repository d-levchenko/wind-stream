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
        <div className="mt-5 flex flex-col gap-3">
          {weather.daily.time.map((day, index) => (
            <div
              key={day}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm font-medium text-white/80 sm:text-base">
                {getDayName(day).slice(0, 3)}
              </span>

              <span className="text-sm font-semibold sm:text-base">
                {weather.daily.temperature_2m_min[index]}
                {weather.daily_units.temperature_2m_min}{' '}
                <span className="text-white/40">/</span>{' '}
                {weather.daily.temperature_2m_max[index]}
                {weather.daily_units.temperature_2m_max}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
