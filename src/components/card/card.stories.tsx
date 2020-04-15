import React from "react";
import { storiesOf } from "@storybook/react";

import { Card } from ".";

storiesOf("Card", module)
  .add("Card with some text", () => (
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
      ipsa debitis ex consequatur autem inventore, explicabo dolor fuga, quasi
      aspernatur incidunt laboriosam quae dignissimos provident, ad dolore enim
      commodi.
    </Card>
  ))
  .add("Card without padding", () => (
    <Card noPadding>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione
      ipsa debitis ex consequatur autem inventore, explicabo dolor fuga, quasi
      aspernatur incidunt laboriosam quae dignissimos provident, ad dolore enim
      commodi.
    </Card>
  ));
