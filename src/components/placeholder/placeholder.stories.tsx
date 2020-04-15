import React from "react";
import { storiesOf } from "@storybook/react";

import { PostPlaceholder } from ".";

storiesOf("Post Placeholder", module).add(
  "Placeholder for loading post",
  () => <PostPlaceholder />
);
