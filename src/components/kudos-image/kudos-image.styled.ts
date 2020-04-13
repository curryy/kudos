import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  position: relative;
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: row;
  align-items: center;
  ${_ => ({
    border: `1px solid ${_.theme.colors.lightBorder}`
  })}
`;

export const Text = styled.div`
  flex: 1;
`;

export const Title = styled.div<{ bold?: boolean }>`
  text-align: center;
  ${_ => ({
    color: _.theme.colors.text
  })}
`;

export const Subtitle = styled.div<{ bold?: boolean }>`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  ${_ => ({
    color: _.theme.colors.text
  })}
`;
