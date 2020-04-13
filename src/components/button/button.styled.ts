import ButtonComponent from "react-bootstrap/Button";
import styled from "styled-components";

export const Button = styled(ButtonComponent)`
  border-radius: 6px;
  border: none;
  font-weight: 600;
  ${_ => ({
    "&:hover:not(:disabled):not(.disabled), &:active:not(:disabled):not(.disabled)": {
      backgroundColor: _.theme.colors.primary
    },
    "&:focus:not(:disabled):not(.disabled), &:not(:disabled):not(.disabled)": {
      backgroundColor: _.theme.colors.secondary
    }
  })}
`;
