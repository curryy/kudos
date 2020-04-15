import styled from "styled-components";

export const Mention = styled.span`
  ${(_) => ({
    color: _.theme.colors.primary,
  })}
`;
export const Tag = styled.span`
  ${(_) => ({
    color: _.theme.colors.secondary,
  })}
`;

export const Text = styled.span`
  white-space: pre;
`;

export const Container = styled.p`
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
`;
