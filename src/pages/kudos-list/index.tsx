import React from "react";
import Col from "react-bootstrap/Col";
import * as S from "./kudos-list.styled";
import { Card } from "../../components/card";
import { Avatar } from "../../components/avatar";
import HandIcon from "../../assets/images/agreement-brown.svg";
import { useGetKudos } from "../../services";

const KudosList = () => {
  const [{ data, loading, error }] = useGetKudos();
  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <S.ContainerRow>
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
      <Col sm={12}>ABC</Col>
      <Col sm={12}>ABC</Col>
    </S.ContainerRow>
  );
};

export default KudosList;
