import React from "react";
import { storiesOf } from "@storybook/react";
import KudosImage from "../../assets/images/undraw_positive_attitude_xaae.svg";
import { KudosButton } from ".";

storiesOf("KudosButton", module).add("Clickable Kudos button", () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <KudosButton
      isActive={isActive}
      onClick={() => {
        setIsActive(!isActive);
      }}
      title="Dziękuję Ci"
      subtitle="Imię i nazwisko"
      icon={<KudosImage />}
    />
  );
});
