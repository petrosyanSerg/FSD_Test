import "@features/weater-app/ui/weatherWeeklyCards/index.scss";

const WeatherWeeklyCard = () => {
  return (
    <div className="weather-weekly-card-item">
      <p className="weather-weekly-card-item-day">Feels Like</p>
      <div>icon</div>
      <div className="weather-weekly-card-item-temperature">
        <p>20</p>
        <p>14</p>
      </div>
    </div>
  );
};

export const WeatherWeeklyCards = () => {
  return (
    <div className="weather-weekly-cards-list">
      {[1, 2, 3, 4,7,8,8].map(() => (
        <WeatherWeeklyCard />
      ))}
    </div>
  );
};