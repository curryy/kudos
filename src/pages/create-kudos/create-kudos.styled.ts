import styled from "styled-components";
import { Card } from "../../components/card";
import { KudosButton as KudosButtonComponent } from "../../components/kudos-button";

export const Container = styled(Card)`
  margin: 4.5rem 0;
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
