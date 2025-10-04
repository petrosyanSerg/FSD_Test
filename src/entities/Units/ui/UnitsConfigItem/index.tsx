import type { FC } from "react";
import { Radio, Group } from "@mantine/core";

import '@entities/Units/ui/UnitsConfigItem/index.scss'

interface RadioOption {
  label: string;
  value: string;
}

interface UnitsConfigItemProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  radioGroup: RadioOption[];
}

export const UnitsConfigItem: FC<UnitsConfigItemProps> = ({
  label,
  value,
  setValue,
  radioGroup,
}) => {
  return (
    <div className="units-config-item">
      <Radio.Group value={value} onChange={setValue} label={label}>
        <Group mt="xs">
          {radioGroup.map(({ label, value }) => (
            <Radio key={label} value={value} label={label} />
          ))}
        </Group>
      </Radio.Group>
    </div>
  );
};
