import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "./select.styled";

type Option = {
  key: string | number;
  label: string;
  icon: React.ReactNode;
};
type Props = {
  value?: string | number;
  onChange: (value: string | number) => void;
  options: Option[];
  noValueText?: string;
};

export const Select: React.FC<Props> = ({
  value,
  onChange,
  options,
  noValueText = "Wybierz..."
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selected = React.useMemo(
    () => options.find(({ key }) => key === value),
    [value]
  );

  const onOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option.key);
  };

  return (
    <S.Container>
      <S.Select aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <S.Option as="div">
          {selected?.icon}
          {selected?.label || noValueText}
        </S.Option>
        <S.Chevron icon={faChevronDown} />
      </S.Select>
      <S.List isOpen={isOpen}>
        {options.map(option => (
          <S.Option onClick={() => onOptionClick(option)} key={option.key}>
            {option.icon}
            {option.label}
          </S.Option>
        ))}
      </S.List>
    </S.Container>
  );
};
