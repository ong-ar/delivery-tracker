import * as React from "react";
import ReactSelect from "react-select";

interface IProps {
  options?: any;
  placeholder?: string;
  onChange?: any;
  name?: string;
  value?: number;
}

const Select: React.SFC<IProps> = ({
  options,
  placeholder,
  onChange,
  name,
  value
}) => (
  <ReactSelect
    options={options}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
    value={value}
  />
);

export default Select;
