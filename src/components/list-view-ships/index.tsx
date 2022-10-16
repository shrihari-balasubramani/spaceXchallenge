import { Stack, Text, Box } from "@shopify/polaris";
import styled from "styled-components";
import { Card } from "../card";
import { ShipImage } from "../ship-image";
import { TextContentWrapper } from "./text-content-wrapper";
import { TitleValue } from "../title-value";

export const ListViewShips = () => {
  const imgSrc = "https://i.imgur.com/5w1ZWre.jpg";
  const name = "GO Ms Tree";
  return (
    <Card>
      <ShipImage src={imgSrc} />
      <TextContentWrapper>
        <Box padding="4" as="div">
          <Stack vertical spacing="loose">
            <Text as="h5" variant="heading2xl">
              {name}
            </Text>
            <Stack vertical spacing="extraTight">
              <TitleValue
                title="Home Port"
                value="No supplier listedPort Canaveral"
              />
              <TitleValue title="Year Built" value="1985" />
              <TitleValue title="Class" value="tesla Model X" />
            </Stack>
          </Stack>
        </Box>
      </TextContentWrapper>
    </Card>
  );
};
