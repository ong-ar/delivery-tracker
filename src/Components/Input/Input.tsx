import { Input as ZendIndex, TextField } from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import * as React from "react";

interface IProps {
  placeholder?: string;
  onKeyPress?: any;
  name?: string;
  style?: any;
  value?: string;
  onChange?: any;
}

const Input: React.SFC<IProps> = ({
  placeholder = "",
  onKeyPress,
  name,
  style,
  value,
  onChange
}) => (
  <ThemeProvider>
    <TextField>
      <ZendIndex
        placeholder={placeholder}
        style={style}
        onKeyPress={onKeyPress}
        name={name}
        value={value}
        onChange={onChange}
      />
    </TextField>
  </ThemeProvider>
);

export default Input;
