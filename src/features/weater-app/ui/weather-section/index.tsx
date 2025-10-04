import { WeatherAside } from "@features/weater-app/ui/weatherAside";
import { WeatherCards } from "@features/weater-app/ui/weatherCards";
import { WeatherBanner } from "@features/weater-app/ui/weatherBanner";
import { WeatherWeeklyCards } from "@features/weater-app/ui/weatherWeeklyCards";
import { WeatherAutocomplete } from "@features/weater-app/ui/weatherAutocomplete";

import "@features/weater-app/ui/weather-section/index.scss"
import { BigTitle } from "@shared/ui/BigTitle";

export const WeatherSection = () => {
  return (
    <div className="weather-section">
      <BigTitle text="How’s the sky looking today?" />
      <WeatherAutocomplete />
      <div className="weather-section-content">
        <div className="weather-main">
          <WeatherBanner />
          <WeatherCards />
          <p className="weather-section-text">Daily forecast</p>
          <WeatherWeeklyCards />
        </div>
        <WeatherAside />
      </div>
    </div>
  );
};
