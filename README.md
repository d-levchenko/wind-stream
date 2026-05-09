# Open Meteo

A lightweight weather dashboard built with React, TypeScript, Vite, and Tailwind
CSS.

The app detects the user location by IP on first load, lets users search for
cities, and shows current conditions, an hourly temperature preview, and a
multi-day daily forecast using the Open-Meteo API.

## 🚀 Live Demo

[View Live Application](https://wind-stream.vercel.app/)

## Features

- Automatic location detection via `ipapi.co`
- City search powered by Open-Meteo geocoding
- Current weather display with temperature, wind speed, humidity, and
  precipitation
- Hourly forecast for the next 24 hours
- Daily min/max temperature summary
- Error handling with toast notifications
- Responsive layout built with Tailwind CSS

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Open-Meteo API
- `react-hot-toast`
- `react-icons`

## Project Structure

- `src/components/App/App.tsx` — main UI layout and state management
- `src/components/SearchCity/SearchCity.tsx` — city search and initial IP-based
  location detection
- `src/components/WeatherInfo/WeatherInfo.tsx` — current weather details
- `src/components/HourlyForecast/HourlyForecast.tsx` — next 24-hour temperature
  forecast
- `src/components/DailyForecast/DailyForecast.tsx` — 7-day temperature range
  cards
- `src/services/weather.ts` — Open-Meteo forecast API integration
- `src/services/geocoding.ts` — city lookup using Open-Meteo geocoding
- `src/services/geolocation.ts` — IP-based location lookup
- `src/types` — TypeScript definitions for API responses and selected location
  data

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL shown in your terminal to view the weather dashboard.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- The app uses the free Open-Meteo APIs and may be subject to rate limits.
- The initial location is fetched from `https://ipapi.co/json/` and may vary in
  accuracy.

## Future Improvements

- Add unit toggle between Celsius and Fahrenheit
- Improve search result selection when multiple cities match
- Add weather icons and enhanced visuals
- Support additional weather details like UV index or sunrise/sunset times
