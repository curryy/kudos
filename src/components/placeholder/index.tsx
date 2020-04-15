import React from "react";
import * as S from "./placeholder.styled";

export const PostPlaceholder = () => {
  return (
    <S.Container>
      <S.AvatarContainer>
        <S.Avatar />
        <div>
          <S.TextPlaceholder width="100px" />
          <S.TextPlaceholder width="80px" />
        </div>
      </S.AvatarContainer>
      <S.TextPlaceholder width="95%" />
      <S.TextPlaceholder width="85%" />
      <S.TextPlaceholder width="90%" />
      <S.ImagePlaceholder />
      <S.Footer>
        <S.TextPlaceholder width="100px" />
        <S.TextPlaceholder width="100px" />
      </S.Footer>

      <S.AvatarContainer>
        <S.Avatar small />
        <S.CommentInput />
      </S.AvatarContainer>
    </S.Container>
  );
};
