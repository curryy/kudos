import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../components";
import * as S from "./not-found.styled";

const NotFound = () => {
  return (
    <S.Container>
      <Heading icon={<FontAwesomeIcon icon={faBomb} />}>
        Podana strona nie została znaleziona
      </Heading>
      <Link to="/">wróć na stronę główną</Link>
    </S.Container>
  );
};

export default NotFound;
