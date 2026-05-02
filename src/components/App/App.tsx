import SearchCity from '../SearchCity/SearchCity';
import type { Location } from '../../types/Location';
import fetchTimeByIP from '../../services/currentLocation';

import { useEffect, useState } from 'react';

const App = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    fetchTimeByIP().then(setLocation);
  }, []);

  return (
    <div>
      <h1>Open-Meteo</h1>
      <SearchCity location={location} />
    </div>
  );
};

export default App;
