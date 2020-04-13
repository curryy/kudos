import React from "react";
import Form from "react-bootstrap/Form";
import * as S from "./form-control.styled";

type Props = {
  label?: string;
  name: string;
  error?: string;
};

export const FormControl: React.FC<Props> = ({
  children,
  label,
  name,
  error
}) => {
  return (
    <S.Container controlId={name}>
      <S.Label>{label}</S.Label>
      <Form.Control custom as="div" isInvalid={!!error}>
        {children}
      </Form.Control>
      <S.Error type="invalid">{error}</S.Error>
    </S.Container>
  );
};
