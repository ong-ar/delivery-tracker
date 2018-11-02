import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { GET_TRACE } from "./SearchQueries";

interface IState {
  company_id: number;
  delivery_id: string;
}

interface IProps extends RouteComponentProps<any> {
  location: any;
}

class SearchContainer extends React.Component<IProps, IState> {
  public state = {
    company_id: 0,
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
    const search = this.props.location.search;
    const params = new URLSearchParams(search);

    return (
      <Query
        query={GET_TRACE}
        variables={{
          company_id: params.get("company_id"),
          delivery_id: params.get("delivery_id")
        }}
      >
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) {
            return <div>Loading ...</div>;
          }
          if (error) {
            return `Error! ${error.message}`;
          }

          return (
            <SearchPresenter
              onInputChange={this.onInputChange}
              onSelectChange={this.onSelectChange}
              onButtonClick={this.onButtonClick}
            />
          );
        }}
      </Query>
    );
  }
}
export default SearchContainer;

// data={data.GetTrace.trace.company_id}
