import sunnyIcon from "@/assets/weather-icons/sunny.svg";
import partlyCloudyIcon from "@/assets/weather-icons/partly-cloudy.svg";
import overcastIcon from "@/assets/weather-icons/overcast.svg";
import fogIcon from "@/assets/weather-icons/fog.svg";
import drizzleIcon from "@/assets/weather-icons/drizzle.svg";
import rainIcon from "@/assets/weather-icons/rain.svg";
import snowIcon from "@/assets/weather-icons/snow.svg";
import stormIcon from "@/assets/weather-icons/storm.svg";

export const WEATHER_CODES = {
  0: { description: "Clear sky", icon: sunnyIcon },
  1: { description: "Mainly clear", icon: sunnyIcon },
  2: { description: "Partly cloudy", icon: partlyCloudyIcon },
  3: { description: "Overcast", icon: overcastIcon },
  45: { description: "Fog", icon: fogIcon },
  48: { description: "Depositing rime fog", icon: fogIcon },
  51: { description: "Light drizzle", icon: drizzleIcon },
  53: { description: "Moderate drizzle", icon: drizzleIcon },
  55: { description: "Dense drizzle", icon: drizzleIcon },
  56: { description: "Light freezing drizzle", icon: drizzleIcon },
  57: { description: "Dense freezing drizzle", icon: drizzleIcon },
  61: { description: "Slight rain", icon: rainIcon },
  63: { description: "Moderate rain", icon: rainIcon },
  65: { description: "Heavy rain", icon: rainIcon },
  66: { description: "Light freezing rain", icon: rainIcon },
  67: { description: "Heavy freezing rain", icon: rainIcon },
  71: { description: "Slight snow fall", icon: snowIcon },
  73: { description: "Moderate snow fall", icon: snowIcon },
  75: { description: "Heavy snow fall", icon: snowIcon },
  77: { description: "Snow grains", icon: snowIcon },
  80: { description: "Slight rain showers", icon: rainIcon },
  81: { description: "Moderate rain showers", icon: rainIcon },
  82: { description: "Violent rain showers", icon: rainIcon },
  85: { description: "Slight snow showers", icon: snowIcon },
  86: { description: "Heavy snow showers", icon: snowIcon },
  95: { description: "Thunderstorm", icon: "storm" },
  96: { description: "Thunderstorm with slight hail", icon: stormIcon },
  99: { description: "Thunderstorm with heavy hail", icon: stormIcon },
};
