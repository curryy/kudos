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

export const KudosContent = styled.div`
  padding: 1rem;
`;

export const KudosHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const CommentContainer = styled.div`
  padding: 1rem;
  display: flex;
  > :first-child {
    margin-right: 0.5rem;
  }
  > :nth-child(2) {
    flex: 1;
  }
`;
