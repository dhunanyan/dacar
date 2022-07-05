import styled, { css } from "styled-components";
import { SectionQueries } from "../../GlobalStyles";

export const BenefitsWrapper = styled.section`
  min-height: 800px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
`;

export const BenefitsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

export const BenefitsTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: #d0d0d0;
  text-align: center;
  margin: 30px auto 45px auto;
  text-transform: uppercase;
  position: relative;
  width: max-content;
  z-index: 5;

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

export const BenefitsCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1150px) {
  }
`;

const BenefitsCircle = css`
  background: linear-gradient(135deg, #74d680, #67a26f);
  border-radius: 50%;
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 0;
`;

export const BenefitsCircle1 = styled.div`
  ${BenefitsCircle}
  width: 450px;
  height: 450px;
  top: 140px;
  left: 70px;
`;

export const BenefitsCircle2 = styled.div`
  ${BenefitsCircle}
  width: 350px;
  height: 350px;
  bottom: 300px;
  right: 200px;
`;

export const BenefitsCircle3 = styled.div`
  ${BenefitsCircle}
  width: 160px;
  height: 160px;
  top: 180px;
  right: 20px;
`;

export const BenefitsCircle4 = styled.div`
  ${BenefitsCircle}
  width: 230px;
  height: 230px;
  left: 300px;
  bottom: 20px;
`;
