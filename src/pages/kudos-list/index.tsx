import React from "react";
import Col from "react-bootstrap/Col";
import * as S from "./kudos-list.styled";
import { Card, Avatar, PostPlaceholder, ErrorMessage } from "../../components";
import HandIcon from "../../assets/images/agreement-brown.svg";
import { useGetKudos } from "../../services";

const Error = () => (
  <ErrorMessage>Wystąpił błąd w czasie pobierania kudosów.</ErrorMessage>
);
const Loading = () => (
  <>
    <Col sm={12}>
      <PostPlaceholder />
    </Col>
    <Col sm={12}>
      <PostPlaceholder />
    </Col>
  </>
);

const KudosList = () => {
  const [{ data, loading, error }] = useGetKudos();

  return (
    <S.ContainerRow noGutters>
      <Col sm={12}>
        <S.CreateButton to="/create">
          <Card noPadding>
            <Avatar
              imageSrc="https://api.adorable.io/avatars/1"
              subtitle="Kliknij, aby dodać post"
            />
            <HandIcon />
          </Card>
        </S.CreateButton>
      </Col>
      {error && <Error />}
      {loading && <Loading />}

      <Col sm={12}>ABC</Col>
    </S.ContainerRow>
  );
};

export default KudosList;
