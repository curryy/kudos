import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emojiData from "emoji-datasource";
import { EmojiData, Picker } from "emoji-mart";
import React from "react";
import { Mention, SuggestionDataItem } from "react-mentions";
import { useTheme } from "styled-components";
import AttachIcon from "../../assets/images/attach.svg";
import GifIcon from "../../assets/images/gif.svg";
import { useClickOutside } from "../../hooks/use-click-outside";
import * as S from "./textarea.styled";

const emojiImage =
  "https://cdn.jsdelivr.net/npm/emoji-datasource@5.0.1/img/apple/sheets/32.png";

type MentionData = { id: number | string; display: string };
type Props = {
  people: MentionData[];
  tags: MentionData[];
  value?: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  expandable?: boolean;
};

export const Textarea: React.FC<Props> = ({
  onChange,
  value,
  people,
  tags,
  placeholder,
  expandable,
}) => {
  const iconTag = " ... ";
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(!expandable);
  const [isEmojiOpen, setIsEmojiOpen] = React.useState(false);
  const emoijPickerButtonElem = React.useRef<HTMLButtonElement>(null);
  const emoijPickerElem = React.useRef<HTMLDivElement>(null);
  const textareaElem = React.useRef<HTMLTextAreaElement>(null);

  useClickOutside([emoijPickerElem, emoijPickerButtonElem], () =>
    setIsEmojiOpen(false)
  );
  useClickOutside(
    [textareaElem, emoijPickerElem, emoijPickerButtonElem],
    () => {
      if (expandable) {
        setIsExpanded(false);
      }
    }
  );

  const mentionStyle = React.useMemo(
    () => ({
      position: "relative",
      zIndex: 1,
      color: theme.colors.primary,
      backgroundColor: theme.colors.background,
      pointerEvents: "none",
    }),
    []
  );

  React.useEffect(() => {
    const textEmojiParts = (
      value?.match(/\:\[\s\.\.\.\s\]\([A-Za-z1-9\_\-\+]+\)/g) || []
    ).map((elem) => elem.toString());

    if (!textareaElem.current || !textEmojiParts) {
      return;
    }

    const elementsContainer =
      textareaElem.current.parentNode?.firstElementChild;
    if (!elementsContainer?.children) {
      return;
    }

    let emojiIndex = 0;
    for (let i = 0; i < elementsContainer?.children.length; i++) {
      const currentElement = elementsContainer?.children[i];
      if (
        currentElement.textContent === iconTag &&
        currentElement.tagName === "STRONG"
      ) {
        if (textEmojiParts[emojiIndex]) {
          const emojiId = textEmojiParts[emojiIndex]
            .split("(")
            .pop()
            ?.slice(0, -1);
          emojiIndex++;
          const data =
            emojiData.find(({ short_name }) => short_name === emojiId) ||
            emojiData[0];

          currentElement.setAttribute(
            "style",
            `background-image: url('${emojiImage}');
            background-size: 5700% 5700%;
            background-position:${(data.sheet_x / 56) * 100}% ${(data.sheet_y /
              56) *
              100}%;
            background-color: white;
            position: relative;
            z-index:1`
          );
        }
      }
    }
  });

  const onEmojiClick = (emoji: EmojiData) => {
    onChange(`${value}:[${iconTag}](${emoji.id})`);
  };

  const handleChange = (
    event: { target: { value: string } },
    newValue: string
  ) => {
    onChange(newValue);
  };

  const renderSuggestion = (
    suggestion: SuggestionDataItem,
    search: string,
    highlightedDisplay: React.ReactNode,
    index: number,
    focused: boolean
  ) => <S.Suggestion focused={focused}>{highlightedDisplay}</S.Suggestion>;

  return (
    <S.Container>
      <S.Textarea
        onFocus={() => {
          if (expandable) {
            setIsExpanded(true);
          }
        }}
        expanded={isExpanded ? 1 : 0}
        placeholder={placeholder}
        inputRef={textareaElem}
        allowSpaceInQuery
        value={value}
        onChange={handleChange}
      >
        <Mention
          trigger="@"
          markup="@[__display__](__id__)"
          data={people}
          displayTransform={(id: string, display: string) => `@${display}`}
          style={mentionStyle}
          renderSuggestion={renderSuggestion}
        />
        <Mention
          trigger="#"
          markup="#[__display__](__id__)"
          data={tags}
          displayTransform={(id: string, display: string) => `#${display}`}
          style={{ ...mentionStyle, color: theme.colors.secondary }}
          renderSuggestion={renderSuggestion}
        />

        <Mention
          markup=":[__display__](__id__)"
          trigger=":"
          renderSuggestion={() => null}
          data={[]}
        />
      </S.Textarea>
      <S.Options>
        <S.Option type="button">
          <AttachIcon />
        </S.Option>
        <S.Option type="button">
          <GifIcon />
        </S.Option>
        <S.Option
          type="button"
          ref={emoijPickerButtonElem}
          onClick={() => setIsEmojiOpen(!isEmojiOpen)}
        >
          <FontAwesomeIcon icon={faSmile} />
        </S.Option>
        {isEmojiOpen ? (
          <S.EmojiPickerContainer ref={emoijPickerElem}>
            <Picker showSkinTones={false} onSelect={onEmojiClick} />
          </S.EmojiPickerContainer>
        ) : null}
      </S.Options>
    </S.Container>
  );
};
