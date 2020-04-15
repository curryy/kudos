import React from "react";
import { storiesOf } from "@storybook/react";

import { ErrorMessage } from ".";

storiesOf("Error Message", module).add("Example error message", () => (
  <ErrorMessage>Coś poszło nie tak</ErrorMessage>
));
