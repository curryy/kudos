import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "../../assets/images/agreement.svg";

import { Header } from ".";

storiesOf("Header", module)
  .add("Standard header", () => <Header>Test Header</Header>)
  .add("Header with icon", () => <Header icon={<Icon />}>UTWÓRZ KUDOS</Header>);
