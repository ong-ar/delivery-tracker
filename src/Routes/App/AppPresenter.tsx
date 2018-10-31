import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import Search from "../Search";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={App} />
    <Route path={"/search"} exact={true} component={Search} />
  </Switch>
);

export default AppPresenter;
