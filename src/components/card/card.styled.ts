import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const Body = styled(Card.Body)<{ nopadding?: 0 | 1 }>`
  border-radius: 6px;
  width: 100%;
  ${(_) => ({
    padding: _.nopadding ? 0 : "1rem",
  })}
`;
