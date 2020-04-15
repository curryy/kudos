import styled from "styled-components";
import { Card, KudosButton as KudosButtonComponent } from "../../components";

export const Container = styled(Card)`
  margin: 2rem 0;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const KudosButton = styled(KudosButtonComponent)`
  margin-bottom: 1rem;
`;
