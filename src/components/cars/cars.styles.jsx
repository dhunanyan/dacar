import styled from "styled-components";
import { SectionQueries } from "../../GlobalStyles";

export const CarsWrapper = styled.section`
  min-height: 800px;
  background: linear-gradient(0deg, #393b44, #434c51);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const CarsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
`;

export const CarsTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: #d0d0d0;
  text-align: center;
  margin: 30px auto 45px auto;
  text-transform: uppercase;
  position: relative;
  width: max-content;

  &:before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 150px;
    height: 6px;
    background: #d0d0d0;
    border-radius: 10px;
  }

  ${SectionQueries}
`;

export const CarsCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
