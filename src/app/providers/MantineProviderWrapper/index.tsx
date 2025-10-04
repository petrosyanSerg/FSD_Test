import type { FC, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

interface MantineProviderWrapperProps {
  children: ReactNode;
}

export const MantineProviderWrapper: FC<MantineProviderWrapperProps> = ({ children }) => (
  <MantineProvider>{children}</MantineProvider>
);
