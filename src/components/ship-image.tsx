import styled from "styled-components";

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
`;

export type ShipImageProps = {
  src: string;
};

export const ShipImage = ({ src }: ShipImageProps) => {
  return (
    <ImageWrapper as="div">
      <ImageStyled src={src} />
    </ImageWrapper>
  );
};
