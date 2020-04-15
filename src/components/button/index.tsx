import React from "react";
import * as S from "./button.styled";

type Props = {
  onClick?: (e: MouseEvent) => void;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, type = "button", className }, ref) => {
    return (
      <S.Button className={className} type={type} ref={ref} onClick={onClick}>
        {children}
      </S.Button>
    );
  }
);
