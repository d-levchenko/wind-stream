import { useState, useEffect } from 'react';

import { fetchGeoByIP } from '../../services/geolocation';
import { fetchLocationByCity } from '../../services/geocoding';

import type { SelectedLocation } from '../../types/SelectedLocation';

import toast, { Toaster } from 'react-hot-toast';

interface SearchCityProps {
  onSelectLocation: (location: SelectedLocation) => void;
}

const SearchCity = ({ onSelectLocation }: SearchCityProps) => {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const loadInitial = async () => {
      try {
        const { city, country_name, latitude, longitude } =
          await fetchGeoByIP();

        onSelectLocation({
          name: city,
          country: country_name,
          latitude,
          longitude,
        });
      } catch {
        toast.error(`Error: something went wrong while loading your location`);
      }
    };

    loadInitial();
  }, [onSelectLocation]);

  const handleSearch = async () => {
    try {
      const { results } = await fetchLocationByCity(search.trim());

      if (!results.length) {
        toast.error('No results found');
        return;
      }

      const { name, country, latitude, longitude } = results[0];

      onSelectLocation({
        name,
        country,
        latitude,
        longitude,
      });

      setSearch('');
    } catch {
      toast.error(`Error: there no such city`);
    }
  };

  return (
    <div className="flex gap-3 pt-12">
      <input
        className="text-white bg-gray-500 px-1 rounded-md"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for a place..."
      />
      <button
        className="text-white bg-blue-400 p-1 rounded-md "
        onClick={handleSearch}>
        Search
      </button>
      <Toaster />
    </div>
  );
};

export default SearchCity;
