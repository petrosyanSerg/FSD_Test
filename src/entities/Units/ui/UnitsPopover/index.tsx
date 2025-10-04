import { useEffect, useState } from "react";

import { Button, Image, Popover } from "@mantine/core";

import {
  windOptions,
  tempelateOptions,
  temperatureOptions,
  precipitationOptions,
} from "@entities/Units/constants";
import UnitIcon from "@shared/assets/images/icon-units.svg";
import IconDropdown from "@shared/assets/images/icon-dropdown.svg";
import { UnitsConfigItem } from "@entities/Units/ui/UnitsConfigItem";

import "@entities/Units/ui/UnitsPopover/index.scss";

export const UnitsPopover = () => {
  const [wind, setWind] = useState("kmh");
  const [temp, setTemp] = useState("celsius");
  const [template, setTemplate] = useState("metric");
  const [precipitation, setPrecipitation] = useState("mm");

  useEffect(() => {
    if (template === "imperial") {
      setTemp("fahrenheit");
      setWind("mph");
      setPrecipitation("in");
    } else if (template === "metric") {
      setTemp("celsius");
      setWind("kmh");
      setPrecipitation("mm");
    }
  }, [template]);

  useEffect(() => {
    if (
      (temp !== "celsius" || wind !== "kmh" || precipitation !== "mm") &&
      (temp !== "fahrenheit" || wind !== "mph" || precipitation !== "in")
    ) {
      setTemplate("");
    }
  }, [temp, wind, precipitation]);

  const unitOptions = [
    { label: "Template", options: tempelateOptions, value: template, setValue: setTemplate },
    { label: "Temperature", options: temperatureOptions, value: temp, setValue: setTemp },
    { label: "Wind Speed", options: windOptions, value: wind, setValue: setWind },
    {
      label: "Precipitation",
      options: precipitationOptions,
      value: precipitation,
      setValue: setPrecipitation,
    },
  ];

  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="filled" radius="md" color="gray">
          <div className="units-popover-button">
            <Image src={UnitIcon} alt="unit-icon" />
            <p>Units</p>
            <Image src={IconDropdown} alt="unit-dropdown" />
          </div>
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        {unitOptions.map(({ label, options, value, setValue }) => (
          <UnitsConfigItem
            key={label}
            label={label}
            value={value}
            setValue={setValue}
            radioGroup={options}
          />
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};
