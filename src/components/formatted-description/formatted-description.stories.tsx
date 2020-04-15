import React from "react";
import { storiesOf } from "@storybook/react";

import { FormattedDescription } from ".";

storiesOf("FormattedDescription", module)
  .add("Description with menition", () => (
    <FormattedDescription>@[Magdalena Baran](2) !!!</FormattedDescription>
  ))
  .add("Description with tags", () => (
    <FormattedDescription>
      #[inspiracja](1) Swietnie #[rozwojosobisty](3)
    </FormattedDescription>
  ))
  .add("Description with emoji", () => (
    <FormattedDescription>Tekst :[ ... ](grinning)</FormattedDescription>
  ))
  .add("Description with menition, tag and emoji", () => (
    <FormattedDescription>
      Hej, :[ ... ](grinning) @[Amanda Baranowska](6) #[praca](2)
    </FormattedDescription>
  ));
