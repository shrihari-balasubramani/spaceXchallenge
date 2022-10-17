import { Stack, Grid, Text, Box } from "@shopify/polaris";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../card";
import { ShipImage } from "../ship-image";
import { ShipsVars, ShipsData } from "../../types";
import { GET_GRID_VIEW_SHIPS } from "./get-grid-view-ships.graphql";
import Placeholder from "../../placeholder.png";
import { useCallback, useEffect } from "react";

export const GridViewShips = () => {
  const { loading, error, data, fetchMore } = useQuery<ShipsData, ShipsVars>(
    GET_GRID_VIEW_SHIPS,
    {
      variables: { offset: 0, limit: 10 },
    }
  );
  const fetchMoreListener = useCallback(() => {
    const currentLength = data?.ships.length ?? 0;
    fetchMore({
      variables: {
        offset: currentLength,
        limit: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          ships: [...prev.ships, ...fetchMoreResult.ships],
        };
      },
    });
  }, [data?.ships]);

  useEffect(() => {
    if (!loading && !error && data?.ships.length) {
      const element = document.getElementsByTagName("body")[0];
      console.log(element.scrollHeight, element.clientHeight);
      if (element.scrollHeight <= element.clientHeight) {
        fetchMoreListener();
      }
    }
  }, []);

  if (loading) {
    return "loading";
  }
  if (error || !data) {
    return "something wen't wrong";
  }
  return (
    <InfiniteScroll
      hasMore={true}
      dataLength={data?.ships.length}
      loader={<span></span>}
      next={fetchMoreListener}
    >
      <Grid>
        {data?.ships.map((eachShip) => {
          return (
            <Grid.Cell
              columnSpan={{ xs: 6, sm: 6, md: 2, lg: 2, xl: 2 }}
              key={eachShip.id}
            >
              <Card>
                <p id={eachShip.id}></p>
                <ShipImage src={eachShip.image ?? Placeholder} />
              </Card>
            </Grid.Cell>
          );
        })}
      </Grid>
    </InfiniteScroll>
  );
};
