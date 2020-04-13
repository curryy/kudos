import React from "react";
import * as S from "./post-footer.styled";
import {
  IconDefinition,
  faHeart,
  faComment,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { Option, OptionsPopover } from "../options-popover";
import { IconBox } from "../icon-box";

type Props = {
  icon: IconDefinition;
  groupName: string;
  likesCount: number;
  onLikeClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  likeActive?: boolean;
  commentsCount: number;
  options: Option[];
  key: string; // unique component key, e.g. post id
};

export const PostFooter: React.FC<Props> = ({
  icon,
  groupName,
  likesCount,
  commentsCount,
  onLikeClick,
  options,
  key
}) => {
  return (
    <S.Container>
      <IconBox icon={icon} text={groupName} />
      <S.OptionsContainer>
        <S.IconOption onClick={onLikeClick}>
          <S.Icon icon={faHeart} />
          {likesCount}
        </S.IconOption>

        <S.IconOption onClick={onLikeClick}>
          <S.Icon icon={faComment} />
          {commentsCount}
        </S.IconOption>
        <OptionsPopover placement="left" popoverId={key} options={options}>
          <S.IconOption onClick={onLikeClick}>
            <S.Icon icon={faEllipsisV} />
          </S.IconOption>
        </OptionsPopover>
      </S.OptionsContainer>
    </S.Container>
  );
};
