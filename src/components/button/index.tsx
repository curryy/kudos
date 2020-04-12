import React from "react";
import * as S from "./button.styled";

type Props = {
  onClick?: (e: MouseEvent) => void;
};

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
