import React from "react";
import { storiesOf } from "@storybook/react";

import { TokenInput } from ".";

storiesOf("TokenInput", module).add("Standard select", () => {
  const [value, setValue] = React.useState<number>();

  return (
    <TokenInput
      options={[
        { id: 1, display: "abc" },
        { id: 2, display: "def" },
        { id: 3, display: "ghi" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
});
