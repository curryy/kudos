import React from "react";
import * as S from "./create-kudos.styled";
import { Heading } from "../../components/heading";
import HandIcon from "../../assets/images/agreement.svg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IconBox } from "../../components/icon-box";
import { useHistory } from "react-router-dom";
import { Form, FormikProps, Formik, FormikHelpers } from "formik";
import { FormControl } from "../../components/form-control";
import { Textarea } from "../../components/textarea";
import * as Yup from "yup";
import { TokenInput } from "../../components/token-input";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "../../components/button";
import { Select } from "../../components/select";

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

const peopleData = [
  { id: 1, display: "Agata" },
  { id: 2, display: "Anna" },
  { id: 3, display: "Karol" },
  { id: 4, display: "Paweł" },
  { id: 5, display: "Karolina" },
  { id: 6, display: "Wojtek" },
];

const tagsData = [
  { id: 1, display: "praca" },
  { id: 4, display: "komputer" },
  { id: 5, display: "IT" },
];

const kudosTypes = [
  { id: 1, title: "Dziękuję Ci", icon: <HandIcon /> },
  { id: 2, title: "Dziękuję Ci 2", icon: <HandIcon /> },
  { id: 3, title: "Dziękuję Ci 3", icon: <HandIcon /> },
  { id: 4, title: "Dziękuję Ci 4", icon: <HandIcon /> },
];

const initialValues: FormValues = {
  description: "",
};

const CreateKudos = () => {
  const history = useHistory();

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
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
            <Row>
              <Col className="d-flex align-items-end" xs={5}>
                <FormControl
                  error={props.errors.group}
                  name="group"
                  label="Wybierz grupę"
                >
                  <Select
                    options={[
                      { key: 1, label: "ABC", icon: <HandIcon /> },
                      { key: 2, label: "DEF", icon: <HandIcon /> },
                    ]}
                    value={props.values.group}
                    onChange={(value) => props.setFieldValue("group", value)}
                  />
                </FormControl>
              </Col>
              <Col
                className="d-flex align-items-end"
                xs={{ span: 4, offset: 3 }}
              >
                <Button className="mb-3" type="submit">
                  Opublikuj
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
