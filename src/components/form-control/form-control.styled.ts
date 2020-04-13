import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Container = styled(Form.Group)`
  ${_ => ({
    color: _.theme.colors.additionalText,
    ".is-invalid": {
      'button:not([aria-expanded="true"]), input': {
        borderColor: _.theme.colors.error,
        color: _.theme.colors.error
      }
    }
  })}
`;

export const Label = styled(Form.Label)`
  font-weight: 600;
  ${_ => ({
    color: _.theme.colors.additionalText
  })}
`;

export const Error = styled(Form.Control.Feedback)`
  ${_ => ({
    color: _.theme.colors.error
  })}
`;
