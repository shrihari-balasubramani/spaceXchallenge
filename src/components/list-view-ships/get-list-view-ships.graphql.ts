import { gql } from "@apollo/client";

export const GET_LIST_VIEW_SHIPS = gql`
  query GetListViewShips($offset: Int!) {
    ships(offset: $offset) {
      name
      url
      image
      active
      home_port
      year_built
      type
    }
  }
`;
