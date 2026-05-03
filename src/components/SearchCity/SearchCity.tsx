import { useEffect, useState } from 'react';
import fetchGeoByIP from '../../services/currentLocation';
import fetchLocationByCity from '../../services/openMeteo';

import toast, { Toaster } from 'react-hot-toast';

type LocationData = {
  name: string;
  latitude: number;
  longitude: number;
};

const SearchCity = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadInitial = async () => {
      try {
        const { city, latitude, longitude } = await fetchGeoByIP();

        setLocation({
          name: city,
          latitude,
          longitude,
        });
      } catch {
        toast.error('Failed to detect location by IP');
      }
    };

    loadInitial();
  }, []);

  const handleSearch = async () => {
    try {
      const geoData = await fetchLocationByCity(search);

      if (!geoData?.results?.length) {
        toast.error('Search field is empty or city name too short', {
          position: 'top-center',
        });
        return;
      }

      const { name, latitude, longitude } = geoData.results[0];

      setLocation({
        name,
        latitude,
        longitude,
      });

      setSearch('');
    } catch {
      toast.error('City not found');
    }
  };

  return (
    <div>
      <h2>City: {location?.name}</h2>

      <Toaster position="top-right" />

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search city..."
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCity;
