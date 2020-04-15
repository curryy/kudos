import React from "react";
import { storiesOf } from "@storybook/react";

import { Textarea } from ".";

const peopleData = [
  { id: 1, display: "Agata" },
  { id: 2, display: "Anna" },
  { id: 3, display: "Karol" },
  { id: 4, display: "Paweł" },
  { id: 5, display: "Karolina" },
  { id: 6, display: "Wojtek" },
];

const tagsData = [
  { id: 1, display: "praca" },
  { id: 4, display: "komputer" },
  { id: 5, display: "IT" },
  { id: 3, display: "wakacje" },
];
storiesOf("Textarea", module).add(
  "Textarea with mentions, hashtags and emoji",
  () => {
    const [value, setValue] = React.useState("");

    return (
      <Textarea
        tags={tagsData}
        people={peopleData}
        value={value}
        onChange={setValue}
      />
    );
  }
);
