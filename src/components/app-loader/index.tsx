import React from "react";
import * as S from "./app-loader.styled";
import Spinner from "react-bootstrap/Spinner";

export const AppLoader: React.FC = () => {
  return (
    <S.Container>
      <Spinner animation="grow" variant="primary" />
    </S.Container>
  );
};
