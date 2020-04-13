import styled from "styled-components";

export const Container = styled.button<{ active?: boolean }>`
  border-radius: 6px;
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: transparent;
  align-items: center;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
  }
  ${_ => ({
    border: `1px solid ${
      _.active ? _.theme.colors.primary : _.theme.colors.lightBorder
    }`,
    background: _.active
      ? _.theme.colors.lightBorder
      : _.theme.colors.background,
    "&:hover": {
      background: _.theme.colors.lightBorder
    }
  })}
`;

export const Text = styled.div<{ bold?: boolean }>`
  text-align: center;
  font-size: 0.875rem;
  ${_ => ({
    fontWeight: _.bold ? 600 : "normal",
    color: _.theme.colors.additionalText
  })}
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Image = styled.div`
  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 1.5rem;
  }
`;
