import { Image } from "@mantine/core";

import logo from "@shared/assets/images/logo.svg";

export const ProjectLogo = () => {
  return (
    <div className="project-logo">
      <Image src={logo} alt="logo" h="auto" w="200px" />
    </div>
  );
};
