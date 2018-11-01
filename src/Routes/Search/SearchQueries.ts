import gql from "graphql-tag";

export const GET_TRACE = gql`
  query getTrace($company_id: Int!, $delivery_id: String!) {
    GetTrace(company_id: $company_id, delivery_id: $delivery_id) {
      trace {
        delivery_id
        company_id
        delivery_info {
          sender
          receiver
        }
        trace_info {
          date
          location
          status
          step
        }
      }
    }
  }
`;
