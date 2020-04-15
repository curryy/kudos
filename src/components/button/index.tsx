import React from "react";
import * as S from "./button.styled";

type Props = {
  onClick?: (e: MouseEvent) => void;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
  disabled?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, onClick, type = "button", className, disabled }, ref) => {
    return (
      <S.Button
        disabled={disabled}
        className={className}
        type={type}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </S.Button>
    );
  }
);
