import SearchCity from '../SearchCity/SearchCity';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

import type { SelectedLocation } from '../../types/SelectedLocation';

import { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState<SelectedLocation | null>(null);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white text-4xl">How's the sky looking today?</h1>
      <SearchCity onSelectLocation={setLocation} />
      {location && <WeatherInfo location={location} />}
    </div>
  );
};

export default App;
