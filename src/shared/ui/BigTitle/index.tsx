import type { FC } from "react";

import "@shared/ui/BigTitle/index.scss";

interface BigTitleProps {
  text: string;
}

export const BigTitle: FC<BigTitleProps> = ({ text }) => <h1 className="big-title">{text}</h1>;
