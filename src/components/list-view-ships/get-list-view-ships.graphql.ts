import { gql } from "@apollo/client";

export const GET_LIST_VIEW_SHIPS = gql`
  query GetListViewShips($offset: Int!, $limit: Int!) {
    ships(offset: $offset, limit: $limit) {
      name
      id
      url
      image
      active
      home_port
      year_built
      type
    }
  }
`;
