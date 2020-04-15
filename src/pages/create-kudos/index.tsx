import React from "react";
import * as S from "./create-kudos.styled";
import {
  Heading,
  IconBox,
  FormControl,
  Button,
  Select,
  ErrorMessage,
  Textarea,
  TokenInput,
} from "../../components";
import HandIcon from "../../assets/images/agreement.svg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Form, FormikProps, Formik } from "formik";
import * as Yup from "yup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetPeople, useGetTags, useCreateKudos } from "../../services";
import { kudosTypes, groups } from "../data";

type FormValues = {
  description: string;
  person?: number;
  kudosType?: number;
  group?: number;
};

const ValidationSchema = Yup.object().shape({
  description: Yup.string().required("To pole jest wymagane"),
  person: Yup.string().required("To pole jest wymagane"),
  kudosType: Yup.string().required("Wybierz rodzaj kudosa"),
  group: Yup.string().required("To pole jest wymagane"),
});

const initialValues: FormValues = {
  description: "",
};

const CreateKudos = () => {
  const history = useHistory();
  const { data: peopleData, error: peopleError } = useGetPeople();
  const { data: tagsData, error: tagsError } = useGetTags();
  const { error, loading, execute: createKudos } = useCreateKudos();

  const handleSubmit = (values: FormValues) => {
    createKudos(values as Required<FormValues>).then(() => {
      history.push("/");
    });
  };

  return (
    <S.Container>
      <S.Heading>
        <Heading icon={<HandIcon />}>UTWÓRZ KUDOS</Heading>
        <IconBox
          icon={faTimes}
          color="text"
          onClick={() => {
            history.push("/");
          }}
        />
      </S.Heading>

      {(peopleError || tagsError) && (
        <ErrorMessage>
          Coś poszło nie tak przy pobieraniu{" "}
          {tagsError && peopleError
            ? "tagów i osób"
            : tagsError
            ? "tagów"
            : "osób"}
          , formularz może nie działać prawidłowo. Spróbuj odświeżyć stronę.
        </ErrorMessage>
      )}
      {error && (
        <ErrorMessage>
          Coś poszło nie tak przy dodawaniu kudosa. Odśwież stronę i spróbuj
          jeszcze raz.
        </ErrorMessage>
      )}
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {(props: FormikProps<FormValues>) => (
          <Form>
            <FormControl
              error={props.errors.description}
              name="description"
              label="Treść posta nad kudosem"
            >
              <Textarea
                tags={tagsData}
                people={peopleData}
                value={props.values.description}
                onChange={(value) => props.setFieldValue("description", value)}
              />
            </FormControl>
            <FormControl
              error={props.errors.person}
              name="person"
              label="Wybierz osobę, której przynajesz kudosa"
            >
              <TokenInput
                options={peopleData}
                value={props.values.person}
                onChange={(value) => props.setFieldValue("person", value)}
              />
            </FormControl>
            <FormControl
              error={props.errors.kudosType}
              name="kudosType"
              label="Wybierz kudos"
            >
              {kudosTypes.map((kudos) => (
                <S.KudosButton
                  key={kudos.id}
                  isActive={kudos.id === props.values.kudosType}
                  onClick={() => {
                    props.setFieldValue("kudosType", kudos.id);
                  }}
                  title={kudos.title}
                  subtitle={
                    peopleData.find((elem) => elem.id === props.values.person)
                      ?.display || "Imię i nazwisko"
                  }
                  icon={kudos.icon}
                />
              ))}
            </FormControl>
            <Row noGutters>
              <Col className="d-flex align-items-end" xs={5}>
                <FormControl
                  error={props.errors.group}
                  name="group"
                  label="Wybierz grupę"
                >
                  <Select
                    options={groups.map((group) => ({
                      key: group.id,
                      label: group.name,
                      icon: <IconBox icon={group.icon} />,
                    }))}
                    value={props.values.group}
                    onChange={(value) => props.setFieldValue("group", value)}
                  />
                </FormControl>
              </Col>
              <Col
                className="d-flex align-items-end"
                xs={{ span: 4, offset: 3 }}
              >
                <Button disabled={loading} className="mb-3" type="submit">
                  {loading ? "Przesyłanie" : "Opublikuj"}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
};

export default CreateKudos;
