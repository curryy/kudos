import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Container = styled(Form.Group)`
  width: 100%;
  ${(_) => ({
    color: _.theme.colors.additionalText,
  })}
`;

export const Label = styled(Form.Label)`
  font-weight: 600;
  font-size: 0.875rem;
  ${(_) => ({
    color: _.theme.colors.additionalText,
  })}
`;

export const Error = styled(Form.Control.Feedback)`
  ${(_) => ({
    color: _.theme.colors.error,
  })}
`;
