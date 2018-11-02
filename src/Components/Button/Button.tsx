import { Button as ZendButton } from "@zendeskgarden/react-buttons";
import "@zendeskgarden/react-buttons/dist/styles.css";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import * as React from "react";

interface IProps {
  type?: any;
  style?: any;
  onClick?: any;
}

const Button: React.SFC<IProps> = ({ onClick, style, type }) => (
  <ThemeProvider>
    <ZendButton onClick={onClick} style={style} type={type}>
      Search
    </ZendButton>
  </ThemeProvider>
);

export default Button;
