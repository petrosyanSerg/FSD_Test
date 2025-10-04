import { ProjectLogo } from "@shared/ui/ProjectLogo";
import { UnitsPopover } from "@entities/Units/ui/UnitsPopover";

import "@widgets/Header/index.scss"

export const Header = () => {
  return (
    <header className="app-header">
      <ProjectLogo />
      <UnitsPopover/>
    </header>
  );
};
