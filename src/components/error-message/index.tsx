import styled from "styled-components";

export const ErrorMessage = styled.div`
  margin: 1rem 0;
  font-size: 0.75rem;
  ${(_) => ({
    color: _.theme.colors.error,
  })}
`;
