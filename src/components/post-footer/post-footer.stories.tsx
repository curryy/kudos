import React from "react";
import { storiesOf } from "@storybook/react";
import { faCity, faTimes } from "@fortawesome/free-solid-svg-icons";

import { PostFooter } from ".";

storiesOf("Post footer", module).add("Example of post footer", () => (
  <PostFooter
    icon={faCity}
    groupName="Marketing"
    likesCount={0}
    key="id1"
    onLikeClick={() => {}}
    commentsCount={1}
    options={[
      { label: "Opcja 1", action: () => console.log("Option 1 clicked!") },
      { label: "Opcja 2", action: () => console.log("Option 2 clicked!") }
    ]}
  />
));
