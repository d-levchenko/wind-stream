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
    <div className="flex justify-center items-center flex-col p-10">
      <h1 className="text-white text-4xl p-2">Daily Forecast</h1>

      {weather && (
        <div className="text-white flex flex-col gap-2">
          {weather.daily.time.map((day, index) => (
            <p key={day} className="flex justify-between w-72">
              <span>{getDayName(day).slice(0, 3)}</span>

              <span>
                {weather.daily.temperature_2m_min[index]}
                {weather.daily_units.temperature_2m_min} /{' '}
                {weather.daily.temperature_2m_max[index]}
                {weather.daily_units.temperature_2m_max}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
