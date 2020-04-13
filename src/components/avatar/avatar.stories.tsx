import React from "react";
import { storiesOf } from "@storybook/react";

import { Avatar } from ".";

storiesOf("Avatar", module)
  .add("Avatar with name", () => (
    <Avatar
      imageSrc="https://api.adorable.io/avatars/285"
      title="Anna Korolczuk"
      subtitle="3 dni temu"
    />
  ))
  .add("Avatar with some text", () => (
    <Avatar
      imageSrc="https://api.adorable.io/avatars/285"
      subtitle="Kliknij, aby dodać post"
    />
  ));
