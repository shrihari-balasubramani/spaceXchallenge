import { Stack, Grid, Text, Box } from "@shopify/polaris";
import { useQuery } from "@apollo/client";
import { Card } from "../card";
import { ShipImage } from "../ship-image";
import { ShipsVars, ShipsData } from "../../types";
import { GET_GRID_VIEW_SHIPS } from "./get-grid-view-ships.graphql";
import Placeholder from "../../placeholder.png";

export const GridViewShips = () => {
  const { loading, error, data } = useQuery<ShipsData, ShipsVars>(
    GET_GRID_VIEW_SHIPS,
    {
      variables: { offset: 0 },
    }
  );

  if (loading) {
    return "loading";
  }
  if (error || !data) {
    return "something wen't wrong";
  }
  return (
    <Grid>
      {data?.ships.map((eachShip) => {
        return (
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 2, lg: 2, xl: 2 }}>
            <Card>
              <ShipImage src={eachShip.image ?? Placeholder} />
            </Card>
          </Grid.Cell>
        );
      })}
    </Grid>
  );
};
