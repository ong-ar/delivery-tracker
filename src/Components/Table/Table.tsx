import {
  Body,
  Caption,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table as ZendTable
} from "@zendeskgarden/react-tables";
import "@zendeskgarden/react-tables/dist/styles.css";
import * as React from "react";

import { ThemeProvider } from "@zendeskgarden/react-theming";

interface IProps {
  caption?: string;
}

const Table: React.SFC<IProps> = ({ caption }) => (
  <ThemeProvider>
    <ZendTable>
      <Caption>{caption}</Caption>
      <Head>
        <HeaderRow>
          <HeaderCell width="25%">Subject</HeaderCell>
          <HeaderCell width="25%">Requester</HeaderCell>
          <HeaderCell width="25%">Requested</HeaderCell>
          <HeaderCell width="25%">Type</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell width="25%">Where are my shoes?</Cell>
          <Cell width="25%">John Smith</Cell>
          <Cell width="25%">15 minutes ago</Cell>
          <Cell width="25%">Ticket</Cell>
        </Row>
        <Row>
          <Cell width="25%">I was charged twice!</Cell>
          <Cell width="25%">Jane Doe</Cell>
          <Cell width="25%">25 minutes ago</Cell>
          <Cell width="25%">Call</Cell>
        </Row>
      </Body>
    </ZendTable>
  </ThemeProvider>
);

export default Table;
