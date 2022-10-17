import { gql } from "@apollo/client";

export const GET_GRID_VIEW_SHIPS = gql`
  query GetGridViewShips($offset: Int!, $limit: Int!) {
    ships(offset: $offset, limit: $limit) {
      image
      active
      id
    }
  }
`;
