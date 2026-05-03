import type { SelectedLocation } from '../../types/SelectedLocation';

interface WeatherInfoProps {
  location: SelectedLocation;
}

const WeatherInfo = ({ location }: WeatherInfoProps) => {
  return (
    <div>
      <h2>Weather Info</h2>
      <p>Name: {location.name}</p>
    </div>
  );
};

export default WeatherInfo;
