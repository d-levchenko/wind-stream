import {
  WiDaySunny,
  WiCloudy,
  WiDayCloudy,
  WiFog,
  WiRain,
  WiShowers,
  WiSnow,
  WiThunderstorm,
} from 'react-icons/wi';

const iconClass = 'text-blue-200 text-3xl';

const getWeatherIcon = (code: number) => {
  if (code === 0) return <WiDaySunny className={iconClass} />;

  if (code === 1 || code === 2) return <WiDayCloudy className={iconClass} />;
  if (code === 3) return <WiCloudy className={iconClass} />;

  if (code === 45 || code === 48) return <WiFog className={iconClass} />;

  if (code >= 51 && code <= 57) return <WiShowers className={iconClass} />;

  if (code >= 61 && code <= 67) return <WiRain className={iconClass} />;

  if (code >= 71 && code <= 77) return <WiSnow className={iconClass} />;

  if (code >= 80 && code <= 82) return <WiShowers className={iconClass} />;

  if (code >= 95 && code <= 99) return <WiThunderstorm className={iconClass} />;

  return <WiCloudy className={iconClass} />;
};

export default getWeatherIcon;
