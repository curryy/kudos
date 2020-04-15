import styled from "styled-components";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const ContainerRow = styled(Row)`
  padding: 2rem 0;
  > div {
    margin-bottom: 12px;
  }
`;

export const CreateButton = styled(Link)`
  cursor: pointer;
  border: none;
  :hover {
    text-decoration: none;
  }
  padding: 0;
  background: transparent;
  width: 100%;
  .card-body {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
