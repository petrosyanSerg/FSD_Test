import { WeatherPopover } from "@features/weater-app/ui/weatherPopover";

import '@features/weater-app/ui/weatherAside/index.scss';

const WeatherAsideItem = () => {
  return (
    <div className="weather-aside-item">
      <div className="weather-aside-item-info">
        <div>icon</div>
        <p className="weather-aside-item-info-time">3pm</p>
      </div>
      <p className="weather-aside-item-temperature">26c</p>
    </div>
  );
};

export const WeatherAside = () => {
  return (
    <aside className="weather-aside">
      <div className="weather-aside-header">
        <p className="weather-aside-header-title">Hourly forecast</p>
        <WeatherPopover />
      </div>
      <div className="weather-aside-list">
        {[1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4].map(() => (
          <WeatherAsideItem />
        ))}
      </div>
    </aside>
  );
};
