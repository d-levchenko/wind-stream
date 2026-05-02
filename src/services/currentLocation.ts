import axios from 'axios';
import type { Location } from '../types/Location';

const BASE_URL = `https://time.now/developer/api`;

const fetchTimeByIP = async (): Promise<Location> => {
  const { data } = await axios.get<Location>(`${BASE_URL}/ip`);

  return data;
};

export default fetchTimeByIP;
