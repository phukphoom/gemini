import { FunctionComponent, useState } from "react";
import { InputLabel, FormControl, Select } from "@mui/material";

import SelectOptionContainer from "./SelectOptionContainer";

import { NestedSelectProps } from "./types";

const NestedSelect: FunctionComponent<NestedSelectProps> = ({
  label,
  initialValue = "",
  optionList = { options: [] },
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState<string | Object>(
    initialValue
  );
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  const handleSelectOption = (optionValue: string | Object) => {
    setCurrentValue(optionValue);
    onChange(optionValue);
  };

  return (
    <FormControl size="small" variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select
        open={isOpenOptions}
        value={currentValue}
        renderValue={(value) => {
          return value instanceof Object ? (
            <p>{Object.values(value).join(" - ")}</p>
          ) : (
            <p>{value}</p>
          );
        }}
        autoWidth
        onClick={() => {
          setIsOpenOptions(!isOpenOptions);
        }}
        MenuProps={{
          anchorOrigin: { horizontal: "left", vertical: "bottom" },
          transformOrigin: { horizontal: "left", vertical: "top" },
        }}
      >
        <SelectOptionContainer
          title={optionList.title}
          options={optionList.options}
          onSelect={handleSelectOption}
        />
      </Select>
    </FormControl>
  );
};

export default NestedSelect;
