import React from "react";
import { storiesOf } from "@storybook/react";

import { AppLoader } from ".";

storiesOf("App loader", module).add("Example of app loader", () => (
  <AppLoader />
));
