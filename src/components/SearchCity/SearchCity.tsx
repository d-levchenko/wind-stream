import { useState, useEffect } from 'react';

import { fetchGeoByIP } from '../../services/geolocation';
import { fetchLocationByCity } from '../../services/geocoding';

import type { SelectedLocation } from '../../types/SelectedLocation';

import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';

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
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <div className="relative w-full">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          <IoIosSearch color="#cfceee" size={20} />
        </span>

        <input
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-white/20 focus:bg-white/10 sm:text-base"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a city..."
        />
      </div>

      <button
        className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-medium transition hover:bg-indigo-600 active:scale-[0.98] sm:text-base"
        onClick={handleSearch}>
        Search
      </button>

      <Toaster />
    </div>
  );
};

export default SearchCity;
