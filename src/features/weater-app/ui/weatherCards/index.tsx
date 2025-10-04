import "@features/weater-app/ui/weatherCards/index.scss";

const WeatherCard = () => {
  return (
    <div className="weather-card-item">
      <p className="weather-card-item-title">Feels Like</p>
      <p className="weather-card-item-info">18p</p>
    </div>
  );
};

export const WeatherCards = () => {
  return (
    <div className="weather-cards-list">
      {[1, 2, 3, 4].map(() => (
        <WeatherCard />
      ))}
    </div>
  );
};
