import { Header } from "@widgets/Header";
import { WeatherPage } from "@pages/weather-page";
import { MantineProviderWrapper } from "@app/providers/MantineProviderWrapper";

import "@app/styles/globals.scss";

export const App = () => {
  return (
    <MantineProviderWrapper>
      <main className="main">
        <Header />
        {/*Outlet*/}
        <WeatherPage />
      </main>
    </MantineProviderWrapper>
  );
};
