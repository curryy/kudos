import React from "react";
import * as S from "./options-popover.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Placement } from "react-bootstrap/Overlay";

export type Option = {
  label: string;
  action: () => void;
};

type Props = {
  placement?: Placement;
  options: Option[];
  popoverId: string;
};

export const OptionsPopover: React.FC<Props> = ({
  children,
  placement = "left",
  options,
  popoverId
}) => {
  return (
    <OverlayTrigger
      rootClose
      trigger="click"
      placement={placement}
      overlay={
        <S.Popover id={popoverId}>
          <S.OptionsContainer>
            {options.map(option => (
              <S.Option key={option.label} onClick={option.action}>
                {option.label}
              </S.Option>
            ))}
          </S.OptionsContainer>
        </S.Popover>
      }
    >
      {children}
    </OverlayTrigger>
  );
};
