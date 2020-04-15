import React, { RefObject } from "react";
import * as S from "./token-input.styled";
import Autocomplete from "react-autocomplete";

type Option = {
  id: number;
  display: string;
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
    const selectedValue = options.find(({ display }) => display === value);
    if (selectedValue) {
      onChange(selectedValue.id);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectValue(e.target.value);
    setInputValue(e.target.value);
  };

  const selectedLabel = options.find(({ id }) => id === value)?.display;

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
      getItemValue={(item) => item.display}
      items={options}
      value={inputValue}
      onChange={handleChange}
      onSelect={selectValue}
      renderInput={renderInput}
      renderItem={(item, isHighlighted) => (
        <S.Option highlighted={isHighlighted} key={item.id}>
          {item.display}
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
              minWidth: undefined,
            }}
            children={items}
          />
        );
      }}
    />
  );
};
