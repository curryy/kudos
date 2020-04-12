import styled from "styled-components";

export const Header = styled.h1`
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  ${_ => ({
    color: _.theme.colors.additionalText
  })}
`;
