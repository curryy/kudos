import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";

export const Container = styled(Form.Control).attrs({ as: "div" })`
  position: relative;
`;

export const Chevron = styled(FontAwesomeIcon)`
  transition: transform 0.3s linear;
`;

export const Select = styled.button`
  width: 100%;
  background-color: transparent;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border 0.3s ease;
  &:focus {
    outline: none;
  }
  &[aria-expanded="true"] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
    ${Chevron} {
      transform: rotate(-180deg);
    }
  }
  ${_ => ({
    color: _.theme.colors.inputText,
    border: `1px solid ${_.theme.colors.inputBorder}`
  })}
`;

export const List = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  border: 1px solid black;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: none;
  ${_ => ({
    maxHeight: _.isOpen ? "300px" : 0,
    border: _.isOpen
      ? `1px solid ${_.theme.colors.inputBorder}`
      : "1px solid transparent"
  })}
  li {
    padding: 4px;
  }
`;

export const Option = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  ${_ => ({
    color: _.theme.colors.inputText,
    "&:hover": {
      color: _.theme.colors.text
    }
  })}
`;
