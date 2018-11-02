import * as React from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import Table from "../../Components/Table";
import styled from "../../typed-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Info = styled.div`
  border: solid 1px;
  margin-top: 50px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: table;
  margin-left: auto;
  margin-right: auto;
`;

const Content500 = styled.div`
  width: 500px;
`;

const Content200 = styled.div`
  width: 200px;
`;

const companyId = [
  { value: "1", label: "대한통운" },
  { value: "2", label: "한통운대" }
];

interface IProps {
  onInputChange: any;
  onSelectChange: any;
  onButtonClick: any;
}

const SearchPresenter: React.SFC<IProps> = ({
  onInputChange,
  onSelectChange,
  onButtonClick
}) => (
  <Container>
    <Header />
    <Content>
      <form action="/search" method="GET">
        <Content200>
          <Select
            name="company_id"
            options={companyId}
            placeholder="택배사 선택"
            onChange={onSelectChange}
          />
        </Content200>
        <br />
        <Content500>
          <Input
            name="delivery_id"
            placeholder="운송장 번호 (ex: 01234455678)"
            style={{ width: "70%", float: "left" }}
            onChange={onInputChange}
          />
          <Button
            style={{
              float: "left",
              onClick: onButtonClick,
              width: "30%"
            }}
          />
        </Content500>
      </form>
    </Content>
    <Info>
      <Table />
      <br />
      <Table />
    </Info>
  </Container>
);
export default SearchPresenter;
