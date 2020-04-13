import styled from "styled-components";
import Popover from "react-bootstrap/Popover";

export const OptionsContainer = styled(Popover.Content)`
  padding: 0;
  border-radius: inherit;
`;

export const Option = styled.button`
  display: block;
  min-width: 150px;
  border: none;
  padding: 4px;
  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  &:focus {
    outline: none;
  }
  ${_ => ({
    "&:not(:last-child)": {
      borderBottom: `1px solid ${_.theme.colors.lightBorder}`
    },
    color: _.theme.colors.additionalText,
    background: _.theme.colors.background,
    "&:hover": {
      color: _.theme.colors.text,
      background: _.theme.colors.lightBorder
    }
  })}
`;
