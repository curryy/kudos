import styled from "styled-components";
import { MentionsInput } from "react-mentions";

export const Container = styled.div`
  position: relative;
`;

export const Textarea = styled(MentionsInput)`
  padding-bottom: 34px;
  min-height: 150px;
  font-size: 0.875rem;
  > div:first-child {
    padding: 5px;
  }

  textarea {
    padding: 4px;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
    ${(_) => ({
      border: `1px solid ${_.theme.colors.inputBorder}`,
    })}
  }
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
  left: 16px;
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
