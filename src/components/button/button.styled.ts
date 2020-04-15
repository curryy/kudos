import ButtonComponent from "react-bootstrap/Button";
import styled from "styled-components";

export const Button = styled(ButtonComponent)`
  border-radius: 6px;
  border: none;
  width: 100%;
  font-weight: 600;
  color: #ffffff;
  ${(_) => ({
    "&:hover:not(:disabled):not(.disabled), &:active:not(:disabled):not(.disabled)": {
      backgroundColor: _.theme.colors.primary,
    },
    "&:focus:not(:disabled):not(.disabled), &:not(:disabled):not(.disabled)": {
      backgroundColor: _.theme.colors.secondary,
    },
    ":disabled": {
      backgroundColor: _.theme.colors.inputBorder,
    },
  })}
`;
