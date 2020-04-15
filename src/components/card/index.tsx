import React from "react";
import * as S from "./card.styled";
import CardComponent from "react-bootstrap/Card";

type Props = {
  noPadding?: boolean;
  className?: string;
};

export const Card: React.FC<Props> = ({ children, noPadding, className }) => {
  return (
    <CardComponent className={className}>
      <S.Body nopadding={noPadding ? 1 : 0}>{children}</S.Body>
    </CardComponent>
  );
};
