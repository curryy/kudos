import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "../../assets/images/agreement.svg";

import { Heading } from ".";

storiesOf("Heading", module)
  .add("Standard heading", () => <Heading>Test Heading</Heading>)
  .add("Heading with icon", () => (
    <Heading icon={<Icon />}>UTWÓRZ KUDOS</Heading>
  ));
