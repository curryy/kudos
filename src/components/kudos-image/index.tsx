import React from "react";
import * as S from "./kudos-image.styled";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export const KudosImage: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <S.Container>
      {icon}
      <S.Text>
        <S.Title>{title}</S.Title>
        <S.Subtitle bold>{subtitle}</S.Subtitle>
      </S.Text>
    </S.Container>
  );
};
