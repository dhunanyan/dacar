import styled from "styled-components";

export const HeroWrapper = styled.section`
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  min-height: 700px;
  padding: 106px 0 0 0;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const HeroContainer = styled.div`
  padding: 30px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 15px;
    width: calc(100% - 30px);
  }
`;
