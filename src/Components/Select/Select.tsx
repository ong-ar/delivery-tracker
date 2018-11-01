import * as React from "react";
import ReactSelect from "react-select";

interface IProps {
  options?: any;
  placeholder?: string;
  onChange?: any;
}

const Select: React.SFC<IProps> = ({ options, placeholder, onChange }) => (
  <ReactSelect
    options={options}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Select;
