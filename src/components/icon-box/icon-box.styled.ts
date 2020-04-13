import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconColor } from ".";

export const IconBox = styled(FontAwesomeIcon)<{ color: IconColor }>`
  width: 24px !important;
  height: 24px;
  padding: 4px;
  border-radius: 6px;
  ${_ => ({
    backgroundColor: _.theme.colors.lightBorder,
    color: _.theme.colors[_.color]
  })}
`;
