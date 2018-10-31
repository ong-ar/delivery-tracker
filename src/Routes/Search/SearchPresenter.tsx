import * as React from "react";

interface IProps {
  data;
}

const SearchPresenter: React.SFC<IProps> = ({ data }) => <div>{data}</div>;
export default SearchPresenter;
