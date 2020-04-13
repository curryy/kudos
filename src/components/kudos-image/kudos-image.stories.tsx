import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "../../assets/images/undraw_positive_attitude_xaae.svg";
import { KudosImage } from ".";

storiesOf("KudosImage", module).add("Kudos image", () => (
  <KudosImage
    title="Dziękuję Ci"
    subtitle="Barbara Klimowicz"
    icon={<Image />}
  />
));
