import { Autocomplete, Button, Image } from "@mantine/core";

import searchIcon from "@shared/assets/images/icon-search.svg";

import "@features/weater-app/ui/weatherAutocomplete/index.scss"

export const WeatherAutocomplete = () => {
  return (
    <div className="weather-autocomplete">
      <Autocomplete
        inputSize="100"
        placeholder="Search for a place..."
        leftSection={<Image src={searchIcon} alt={"searchIcon"} w={20} />}
      />
      <Button>Search</Button>
    </div>
  );
};
