import type { Location } from '../../types/Location';

interface SearchCityProps {
  location: Location | null;
}

const SearchCity = ({ location }: SearchCityProps) => {
  return (
    <div>
      <h2>Search City</h2>
      <p>{location?.timezone.replaceAll('_', ' ').replaceAll('/', ' - ')}</p>
    </div>
  );
};

export default SearchCity;
