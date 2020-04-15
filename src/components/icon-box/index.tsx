import React from "react";
import * as S from "./icon-box.styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type IconColor = "primary" | "secondary" | "text";

type Props = {
  icon: IconDefinition;
  color?: IconColor;
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  text?: string;
};

export const IconBox: React.FC<Props> = ({
  icon,
  color = "primary",
  onClick,
  text,
}) => {
  return (
    <S.Container>
      <S.IconBox onClick={onClick} icon={icon} color={color} />
      <S.Text color={color}>{text}</S.Text>
    </S.Container>
  );
};
