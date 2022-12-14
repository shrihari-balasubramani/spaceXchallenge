import { Stack, Text, Box } from "@shopify/polaris";
import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../card";
import { ShipImage } from "../ship-image";
import { TextContentWrapper } from "./text-content-wrapper";
import { TitleValue } from "../title-value";
import { ShipsVars, ShipsData } from "../../types";
import { GET_LIST_VIEW_SHIPS } from "./get-list-view-ships.graphql";
import Placeholder from "../../placeholder.png";
import styled from "styled-components";
import { useCallback, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const ListViewShips = () => {
  const { loading, error, data, fetchMore } = useQuery<ShipsData, ShipsVars>(
    GET_LIST_VIEW_SHIPS,
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

  if (loading) {
    return (
      <Text as="p" variant="headingSm">
        loading
      </Text>
    );
  }
  if (error || !data) {
    return (
      <Text as="p" variant="headingSm">
        something wen't wrong
      </Text>
    );
  }

  return (
    <Wrapper>
      <Stack vertical spacing="extraLoose" distribution="center">
        <InfiniteScroll
          hasMore={true}
          dataLength={data?.ships.length}
          loader={<span></span>}
          next={fetchMoreListener}
        >
          {data?.ships.map((eachShip) => {
            return (
              <Card>
                <ShipImage src={eachShip.image ?? Placeholder} />

                <TextContentWrapper>
                  <Box padding="4" as="div">
                    <Stack vertical spacing="loose">
                      <Text as="h5" variant="heading2xl">
                        {eachShip.name}
                      </Text>
                      <Stack vertical spacing="extraTight">
                        {eachShip.year_built && (
                          <TitleValue
                            title="Year Built"
                            value={`${eachShip.year_built}`}
                          />
                        )}
                        {eachShip.home_port && (
                          <TitleValue
                            title="Home Port"
                            value={`${eachShip.home_port}`}
                          />
                        )}
                        {eachShip.type && (
                          <TitleValue title="Type" value={`${eachShip.type}`} />
                        )}
                      </Stack>
                    </Stack>
                  </Box>
                </TextContentWrapper>
              </Card>
            );
          })}
        </InfiniteScroll>
      </Stack>
    </Wrapper>
  );
};
