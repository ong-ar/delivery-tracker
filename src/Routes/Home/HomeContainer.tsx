import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import HomePresenter from "./HomePresenter";

interface IState {
  company_id: number;
  delivery_id: string;
}

interface IProps extends RouteComponentProps<any> {
  history: any;
}

class HomeContainer extends React.Component<IProps, IState> {
  public state = {
    company_id: 1,
    delivery_id: ""
  };

  public onButtonClick = () => {
    this.props.history.push({
      pathname: "/search",
      search:
        "?company_id=" +
        this.state.company_id +
        "&delivery_id=" +
        this.state.delivery_id
    });
  };

  public onSelectChange = selectedOption => {
    const { value } = selectedOption;

    this.setState({ company_id: value });
  };

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public render() {
    return (
      <HomePresenter
        onInputChange={this.onInputChange}
        onSelectChange={this.onSelectChange}
        onButtonClick={this.onButtonClick}
      />
    );
  }
}
export default HomeContainer;
