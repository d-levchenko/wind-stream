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
    <div className="w-full rounded-2xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6 shadow-lg backdrop-blur md:p-8">
      <h2 className="text-xl font-semibold text-white md:text-2xl">
        Daily Forecast
      </h2>

      {weather && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
          {weather.daily.time.map((day, index) => (
            <div
              key={day}
              className="min-w-22 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-md">
              <p className="text-xs font-medium text-white/60 md:text-sm">
                {getDayName(day).slice(0, 3)}
              </p>

              <p className="mt-1 text-base font-semibold text-white md:text-lg">
                {weather.daily.temperature_2m_min[index]}
                <span className="text-white/60">
                  {weather.daily_units.temperature_2m_min}
                </span>
              </p>

              <p className="text-sm font-semibold text-white/80 md:text-base">
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
