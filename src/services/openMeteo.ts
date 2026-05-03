// services/openMeteo.ts
import axios from 'axios';

import type { OpenMeteoResponse } from '../types/openMeteoResponse';

const API_URL = `https://geocoding-api.open-meteo.com/v1/search`;

export const fetchLocationByCity = async (
  city: string,
): Promise<OpenMeteoResponse> => {
  const { data } = await axios.get<OpenMeteoResponse>(API_URL, {
    params: {
      name: city,
      count: 1,
      language: 'en',
      format: 'json',
    },
  });

  return data;
};

export default fetchLocationByCity;
