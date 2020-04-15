import styled from "styled-components";
import { MentionsInput } from "react-mentions";

export const Container = styled.div`
  position: relative;
`;

export const Textarea = styled(MentionsInput)<{ expanded: number }>`
  font-size: 0.875rem;
  transition: min-height 0.3s ease;
  > :nth-child(2) {
    margin-top: 24px !important;
  }
  > div:first-child {
    padding: 9px;
  }

  textarea {
    padding: 8px;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }
  ${(_) => ({
    ...(_.expanded
      ? {
          minHeight: "150px",
          paddingBottom: "34px",
        }
      : {
          minHeight: "40px",
        }),
    textarea: {
      "&::placeholder": {
        color: _.theme.colors.additionalText,
        opacity: 0.5,
      },
      color: _.theme.colors.text,
      border: `1px solid ${
        _.expanded ? _.theme.colors.inputBorder : _.theme.colors.lightBorder
      }`,
    },
  })}
`;

export const Suggestion = styled.span<{ focused: boolean }>`
  font-size: 0.875rem;
  ${(_) => ({
    color: _.theme.colors.additionalText,
    backgroundColor: _.focused ? _.theme.colors.lightBorder : "transparent",
  })}
`;

export const Options = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const Option = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  ${(_) => ({
    backgroundColor: _.theme.colors.lightBorder,
    "&:hover": {
      backgroundColor: _.theme.colors.inputBorder,
    },
  })}
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 24px;
  top: 0;
  .emoji-mart-title-label {
    display: none;
  }
`;
