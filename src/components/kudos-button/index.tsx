import React from "react";
import * as S from "./kudos-button.styled";

type Props = {
  title: string;
  subtitle: string;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  isActive?: boolean;
  icon: React.ReactNode;
};

export const KudosButton: React.FC<Props> = ({
  onClick,
  icon,
  title,
  subtitle,
  isActive
}) => {
  return (
    <S.Container active={isActive} onClick={onClick}>
      <S.Image>{icon}</S.Image>
      <S.Text>{title}</S.Text>
      <S.Text bold>{subtitle}</S.Text>
    </S.Container>
  );
};
