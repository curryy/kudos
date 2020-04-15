import React from "react";
import { storiesOf } from "@storybook/react";

import { TokenInput } from ".";

storiesOf("TokenInput", module).add("Standard select", () => {
  const [value, setValue] = React.useState<number>();

  return (
    <TokenInput
      options={[
        { key: 1, label: "abc" },
        { key: 2, label: "def" },
        { key: 3, label: "ghi" }
      ]}
      value={value}
      onChange={setValue}
    />
  );
});
