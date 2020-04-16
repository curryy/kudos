import React from "react";
import * as S from "./formatted-description.styled";
import { Emoji } from "emoji-mart";

type Props = {
  children: string;
};

const descRegexp = /([#@:]\[[A-Za-z\sĄąĘęÓóŁłŚśŻżŹźĆćŃń\.]+\]\([\d\w\_\-\+]+\))|((?![#@:]\[[A-Za-z\s\.]+\]\([\d\w\_\-\+]+\)).)*\n/g;
const mentionRegexp = /(\@\[[A-Za-z\sĄąĘęÓóŁłŚśŻżŹźĆćŃń\.]+\]\([\d]+\))/g;
const tagRegexp = /(\#\[[A-Za-z\sĄąĘęÓóŁłŚśŻżŹźĆćŃń\.]+\]\([\d]+\))/g;
const emojiRegexp = /(\:\[\s\.\.\.\s\]\([\d\w\_\-\+]+\))/g;

export const FormattedDescription: React.FC<Props> = ({ children }) => {
  const decriptionParts = children.match(descRegexp) || [];
  const getDisplayValue = (value: string) => {
    return value.split("]")[0].split("[")[1];
  };

  return (
    <S.Container>
      {decriptionParts.map((elem, i) => {
        if (mentionRegexp.test(elem)) {
          mentionRegexp.lastIndex = 0;
          return <S.Mention key={i}>@{getDisplayValue(elem)}</S.Mention>;
        }
        if (tagRegexp.test(elem)) {
          tagRegexp.lastIndex = 0;
          return <S.Tag key={i}>#{getDisplayValue(elem)}</S.Tag>;
        }

        if (emojiRegexp.test(elem)) {
          emojiRegexp.lastIndex = 0;
          const emojiId = elem.split(")")[0].split("(")[1];
          return <Emoji key={i} size={20} emoji={emojiId} />;
        }
        return <S.Text key={i}>{elem}</S.Text>;
      })}
    </S.Container>
  );
};
