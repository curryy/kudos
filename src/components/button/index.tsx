import React from "react";
import * as S from "./button.styled";

type Props = {
  onClick?: (e: MouseEvent) => void;
  children?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick }, ref) => {
    return (
      <S.Button ref={ref} onClick={onClick}>
        {children}
      </S.Button>
    );
  }
);
