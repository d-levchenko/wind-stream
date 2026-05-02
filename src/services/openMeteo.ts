import axios from 'axios';
import type { openMeteoResponse } from '../types/openMeteoResponse';

const API_URL = `https://geocoding-api.open-meteo.com/v1/search`;

const fetchLocation = async (): Promise<openMeteoResponse> => {
  const { data } = await axios.get(API_URL);

  return data;
};

export default fetchLocation;
