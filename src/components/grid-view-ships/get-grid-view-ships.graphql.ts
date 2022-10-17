import { gql } from "@apollo/client";

export const GET_GRID_VIEW_SHIPS = gql`
  query GetGridViewShips($offset: Int!) {
    ships(offset: $offset) {
      image
      active
    }
  }
`;
