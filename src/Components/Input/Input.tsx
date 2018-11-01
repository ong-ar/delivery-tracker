import { Input as ZendIndex, TextField } from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import * as React from "react";

interface IProps {
  placeholder?: string;
  onKeyPress?: any;
}

const Input: React.SFC<IProps> = ({ placeholder = "", onKeyPress }) => (
  <ThemeProvider>
    <TextField>
      <ZendIndex
        placeholder={placeholder}
        style={{ width: "100%" }}
        onKeyPress={onKeyPress}
      />
    </TextField>
  </ThemeProvider>
);

export default Input;
