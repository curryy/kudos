import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconColor } from ".";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span<{
  color: IconColor;
}>`
  padding-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  ${_ => ({
    color: _.theme.colors[_.color]
  })}
`;

// important! overrides default font awesome icon size
export const IconBox = styled(FontAwesomeIcon)<{
  color: IconColor;
}>`
  width: 24px !important;
  height: 24px;
  padding: 4px;
  border-radius: 6px;
  ${_ => ({
    backgroundColor: _.theme.colors.lightBorder,
    color: _.theme.colors[_.color],
    ...(!!_.onClick
      ? {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: _.theme.colors.inputBorder
          }
        }
      : {})
  })}
`;
