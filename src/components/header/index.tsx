import React from "react";
import * as S from "./header.styled";

type Props = {
  icon?: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "div";
};

export const Header: React.FC<Props> = ({ children, icon, tag }) => {
  return (
    <S.Header as={tag}>
      {icon}
      {children}
    </S.Header>
  );
};
