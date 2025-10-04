import { useMediaQuery } from "react-responsive";

import { Image } from "@mantine/core";

import MobileBackGroundImage from "@shared/assets/images/bg-today-small.svg";
import DesktopBackGroundImage from "@shared/assets/images/bg-today-large.svg";

import "@features/weater-app/ui/weatherBanner/index.scss";

export const WeatherBanner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 375px)" });

  return (
    <div className="weather-banner">
      <div className="weather-banner-content">
        <div className="weather-banner-city">
          <h1 className="weather-banner-city-name">Berlin germanya</h1>
          <p className="weather-banner-city-date">or</p>
        </div>
        <div className="weather-banner-info">
          <i>icon</i>
          <p className="weather-banner-info-temperature">20</p>
        </div>
      </div>
      <Image
        alt="weather banner"
        className="weather-banner-image"
        w={isMobile ? "343px" : "800px"}
        src={isMobile ? MobileBackGroundImage : DesktopBackGroundImage}
      />
    </div>
  );
};
