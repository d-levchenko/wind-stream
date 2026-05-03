// services/ipapi.ts
import axios from 'axios';
import type { IpGeoResponse } from '../types/IpGeoResponse';

const API_URL = 'https://ipapi.co/json/';

export const fetchGeoByIP = async (): Promise<IpGeoResponse> => {
  const { data } = await axios.get<IpGeoResponse>(API_URL);

  return data;
};

export default fetchGeoByIP;
