export interface OpenMeteoResult {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
}

export interface OpenMeteoResponse {
  results: OpenMeteoResult[];
}
