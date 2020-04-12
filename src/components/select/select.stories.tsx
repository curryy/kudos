import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "../../assets/images/agreement.svg";

import { Select } from ".";

storiesOf("Select", module).add("Standard select", () => (
  <Select
    options={[
      { key: 1, label: "ABC", icon: <Icon /> },
      { key: 2, label: "DEF", icon: <Icon /> }
    ]}
    onChange={() => {}}
  />
));
