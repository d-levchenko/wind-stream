import SearchCity from '../SearchCity/SearchCity';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

import type { SelectedLocation } from '../../types/SelectedLocation';

import { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState<SelectedLocation | null>(null);

  return (
    <div>
      <h1>Weather Now</h1>
      <SearchCity onSelectLocation={setLocation} />
      {location && <WeatherInfo location={location} />}
    </div>
  );
};

export default App;
