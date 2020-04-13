import React from "react";
import * as S from "./icon-box.styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type IconColor = "primary" | "secondary";

type Props = {
  icon: IconDefinition;
  color?: IconColor;
};

export const IconBox: React.FC<Props> = ({ icon, color = "primary" }) => {
  return <S.IconBox size={undefined} icon={icon} color={color} />;
};
