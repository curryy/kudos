import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  ${(_) => ({
    borderBottom: `1px solid ${_.theme.colors.lightBorder}`,
  })}
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const Icon = styled(FontAwesomeIcon)<{ active?: 0 | 1 }>`
  ${(_) => ({
    color: _.active ? _.theme.colors.primary : _.theme.colors.lightBorder,
    "&:hover": {
      color: _.active ? _.theme.colors.primary : _.theme.colors.inputBorder,
    },
  })}
`;

export const IconOption = styled.div`
  ${Icon} {
    margin-right: 4px;
    font-size: 1rem;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  :last-child {
    margin-left: 1rem;
  }
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  ${(_) => ({
    [`:last-child ${Icon}`]: {
      color: _.theme.colors.primary,
    },
    color: _.theme.colors.primary,
    ...(!!_.onClick
      ? {
          cursor: "pointer",
        }
      : {}),
  })}
`;
