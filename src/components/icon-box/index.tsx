import React from "react";
import * as S from "./icon-box.styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type IconColor = "primary" | "secondary" | "text";

type Props = {
  icon: IconDefinition;
  color?: IconColor;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

export const IconBox: React.FC<Props> = ({
  icon,
  color = "primary",
  onClick
}) => {
  return (
    <S.IconBox onClick={onClick} size={undefined} icon={icon} color={color} />
  );
};
