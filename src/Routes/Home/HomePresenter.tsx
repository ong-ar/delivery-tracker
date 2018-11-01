import * as React from "react";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import searchImg from "../../images/search.png";
import styled from "../../typed-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 300px;
  text-align: center;
`;

const SearchImage = styled.div`
  width: 100%;
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

const companyId = [{ value: "001", label: "대한통운" }];

const handleKeyPress = e => {
  if (e.key === "Enter") {
    console.log("do validate");
  }
};

const HomePresenter: React.SFC = ({}) => (
  <Container>
    <Header>
      <SearchImage>
        <img src={searchImg} />
      </SearchImage>
    </Header>
    <Content>
      <Content200>
        <Select options={companyId} placeholder="택배사 선택" />
      </Content200>
      <br />
      <Content500>
        <Input onKeyPress={handleKeyPress} />
      </Content500>
    </Content>
  </Container>
);
export default HomePresenter;
