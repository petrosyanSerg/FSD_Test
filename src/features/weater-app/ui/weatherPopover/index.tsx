import { Button, Image, Popover } from "@mantine/core";
import IconDropdown from "@shared/assets/images/icon-dropdown.svg";

export const WeatherPopover = () => {
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="filled" radius="md" color="gray">
          <div className="units-popover-button">
            <p>Day</p>
            <Image src={IconDropdown} alt="unit-dropdown" />
          </div>
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
      </Popover.Dropdown>
    </Popover>
    )
};
