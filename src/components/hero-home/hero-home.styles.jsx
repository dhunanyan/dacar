import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  min-height: 900px;
  padding: 106px 0 0 0;
`;

export const HeroContainer = styled.div`
  padding: 30px;
  max-width: 1300px;
  margin: 0 auto;
`;
