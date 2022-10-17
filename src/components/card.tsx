import {
  Card as PolarisCard,
  CardProps as PolarisCardProps,
} from "@shopify/polaris";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
`;

export type CardProps = PolarisCardProps;

export const Card = ({ children }: PropsWithChildren<CardProps>) => {
  return (
    <PolarisCard>
      <CardWrapper>{children}</CardWrapper>
    </PolarisCard>
  );
};
