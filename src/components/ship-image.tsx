import styled from "styled-components";
import Placeholder from "../placeholder.png";

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
  @media screen and (min-width: 850px) {
    width: 351px;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 16/9;
`;

export type ShipImageProps = {
  src: string;
};

export const ShipImage = ({ src }: ShipImageProps) => {
  return (
    <ImageWrapper as="div">
      <ImageStyled
        src={src}
        onError={(e) => (e.currentTarget.src = Placeholder)}
      />
    </ImageWrapper>
  );
};
