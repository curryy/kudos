import React from "react";
import { storiesOf } from "@storybook/react";
import { OptionsPopover } from ".";
import { Button } from "../button";

storiesOf("Options popover", module).add("Simple options popover", () => (
  <OptionsPopover
    popoverId="test"
    placement="bottom"
    options={[
      { label: "Opcja 1", action: () => console.log("Option 1 clicked!") },
      { label: "Opcja 2", action: () => console.log("Option 2 clicked!") }
    ]}
  >
    <Button>Open options</Button>
  </OptionsPopover>
));
