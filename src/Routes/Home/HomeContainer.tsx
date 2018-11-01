import * as React from "react";
import SearchPresenter from "../Search/SearchPresenter";
import HomePresenter from "./HomePresenter";

interface IState {
  companyId: number;
  deliveryId: string;
}

class HomeContainer extends React.Component<IState> {
  public state = {
    companyId: null,
    deliveryId: ""
  };
  public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
  };
  public render() {
    if (this.state.companyId !== null && this.state.deliveryId) {
      return <SearchPresenter data={this.state} />;
    } else {
      return <HomePresenter />;
    }
  }
}
export default HomeContainer;
