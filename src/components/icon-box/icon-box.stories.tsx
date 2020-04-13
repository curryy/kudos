import React from "react";
import { storiesOf } from "@storybook/react";
import { faCity, faTimes } from "@fortawesome/free-solid-svg-icons";

import { IconBox } from ".";

storiesOf("IconBox", module)
  .add("City IconBox, primary color", () => <IconBox icon={faCity} />)
  .add("City IconBox, secondary color", () => (
    <IconBox icon={faCity} color="secondary" />
  ))
  .add("IconBox with onClick action", () => (
    <IconBox icon={faTimes} color="text" onClick={() => {}} />
  ));
