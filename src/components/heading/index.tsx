import React from "react";
import * as S from "./heading.styled";

type Props = {
  icon?: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "div";
};

export const Heading: React.FC<Props> = ({ children, icon, tag }) => {
  return (
    <S.Heading as={tag}>
      {icon}
      {children}
    </S.Heading>
  );
};
