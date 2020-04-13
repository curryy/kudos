import React from "react";
import * as S from "./avatar.styled";

export type AvatarSize = "default" | "small";

type Props = {
  size?: AvatarSize;
  imageSrc: string;
  title?: string;
  subtitle?: string;
};

export const Avatar: React.FC<Props> = ({
  size = "default",
  imageSrc,
  title,
  subtitle
}) => {
  return (
    <S.Container>
      <S.Image size={size} src={imageSrc} />
      <S.TextsContainer>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TextsContainer>
    </S.Container>
  );
};
