import React, { RefObject } from "react";
import * as S from "./token-input.styled";
import Autocomplete from "react-autocomplete";

type Option = {
  key: number;
  label: string;
};

type Props = {
  options: Option[];
  value?: number;
  onChange: (value?: number) => void;
};

export const TokenInput: React.FC<Props> = ({ options, value, onChange }) => {
  const [inputValue, setInputValue] = React.useState("");
  const clearInput = () => {
    setInputValue("");
    onChange();
  };

  const selectValue = (value: string) => {
    const selectedValue = options.find(({ label }) => label === value);
    if (selectedValue) {
      onChange(selectedValue.key);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectValue(e.target.value);
    setInputValue(e.target.value);
  };

  const selectedLabel = options.find(({ key }) => key === value)?.label;

  const renderInput: (
    props: React.HTMLProps<HTMLInputElement>
  ) => React.ReactNode = ({ ref, as, ...props }) => (
    <S.Container>
      {selectedLabel ? (
        <S.Value>
          {selectedLabel}
          <S.RemoveIcon onClick={clearInput} />
        </S.Value>
      ) : null}
      <S.Input
        {...props}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Backspace") {
            clearInput();
          } else if (props.onKeyDown) {
            props.onKeyDown(e);
          }
        }}
        value={value ? "" : props.value}
        ref={ref as RefObject<HTMLInputElement>}
      />
    </S.Container>
  );

  return (
    <Autocomplete
      wrapperStyle={{ width: "100%", position: "relative" }}
      getItemValue={item => item.label}
      items={options}
      value={inputValue}
      onChange={handleChange}
      onSelect={selectValue}
      renderInput={renderInput}
      renderItem={(item, isHighlighted) => (
        <S.Option highlighted={isHighlighted} key={item.key}>
          {item.label}
        </S.Option>
      )}
      renderMenu={(items, value, style) => {
        return (
          <S.Menu
            style={{
              ...style,
              left: 0,
              right: 0,
              top: undefined,
              position: "absolute" as "absolute",
              minWidth: undefined
            }}
            children={items}
          />
        );
      }}
    />
  );
};
