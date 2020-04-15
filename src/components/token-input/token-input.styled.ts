import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Container = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 4px 8px;
  position: relative;
  ${(_) => ({
    border: `1px solid ${_.theme.colors.inputBorder}`,
  })}
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  flex: 1;
  &:focus {
    outline: none;
  }
`;
export const Menu = styled.div`
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 5;

  ${(_) => ({
    border: `1px solid ${_.theme.colors.lightBorder}`,
  })}
`;

export const Option = styled.div<{ highlighted: boolean }>`
  cursor: pointer;
  padding: 2px 8px;
  font-size: 0.875rem;
  ${(_) => ({
    backgroundColor: _.highlighted
      ? _.theme.colors.lightBorder
      : _.theme.colors.background,
  })}
`;

export const Value = styled.div`
  font-size: 0.875rem;
  border-radius: 6px;
  padding: 2px 24px 2px 4px;
  margin-right: 4px;
  position: relative;
  ${(_) => ({
    color: _.theme.colors.text,
    border: `1px solid ${_.theme.colors.primary}`,
    backgroundColor: _.theme.colors.lightBorder,
  })}
`;

export const RemoveIcon = styled(FontAwesomeIcon).attrs({
  icon: faTimes,
  size: "sm",
})`
  cursor: pointer;
  right: 4px;
  top: 4px;
  position: absolute;
  ${(_) => ({
    color: _.theme.colors.additionalText,
    "&:hover": {
      color: _.theme.colors.text,
    },
  })}
`;
