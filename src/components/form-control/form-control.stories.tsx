import React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "../select";
import { FormControl } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCity } from "@fortawesome/free-solid-svg-icons";

storiesOf("Form control", module)
  .add("Standard form control", () => (
    <FormControl name="group" label="Wybierz grupę">
      <Select
        options={[
          { key: 1, label: "ABC", icon: <FontAwesomeIcon icon={faCity} /> },
          {
            key: 2,
            label: "DEF",
            icon: <FontAwesomeIcon icon={faCheckSquare} />
          }
        ]}
        onChange={() => {}}
      />
    </FormControl>
  ))
  .add("Form control with error", () => (
    <FormControl
      name="group"
      error="To pole jest wymagane!"
      label="Wybierz grupę"
    >
      <Select
        options={[
          { key: 1, label: "ABC", icon: <FontAwesomeIcon icon={faCity} /> },
          {
            key: 2,
            label: "DEF",
            icon: <FontAwesomeIcon icon={faCheckSquare} />
          }
        ]}
        onChange={() => {}}
      />
    </FormControl>
  ));
