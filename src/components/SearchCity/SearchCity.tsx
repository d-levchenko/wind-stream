import { useEffect, useState } from 'react';
import fetchGeoByIP from '../../services/currentLocation';
import fetchLocationByCity from '../../services/openMeteo';

type LocationData = {
  name: string;
  latitude: number;
  longitude: number;
};

const SearchCity = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitial = async () => {
      try {
        setError(null);

        const geo = await fetchGeoByIP();

        setLocation({
          name: geo.city,
          latitude: geo.latitude,
          longitude: geo.longitude,
        });
      } catch (err) {
        setError('Failed to detect location by IP');
        console.error(err);
      }
    };

    loadInitial();
  }, []);

  const handleSearch = async () => {
    try {
      setError(null);

      const geoData = await fetchLocationByCity(search);

      if (!geoData.results?.length) {
        throw new Error('Not found');
      }

      const result = geoData.results[0];

      setLocation({
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude,
      });

      setSearch('');
    } catch (err) {
      setError('City not found');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>City: {location?.name}</h2>
      <h2>Latitude: {location?.latitude}</h2>
      <h2>Longitude: {location?.longitude}</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

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
