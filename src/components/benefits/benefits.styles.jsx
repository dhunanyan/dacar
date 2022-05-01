import styled, { css } from "styled-components";

export const BenefitsWrapper = styled.div`
  min-height: 800px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
`;

export const BenefitsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
`;

export const BenefitsCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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
  top: 40px;
  left: 100px;
`;

export const BenefitsCircle2 = styled.div`
  ${BenefitsCircle}
  width: 350px;
  height: 350px;
  bottom: 480px;
  right: 350px;
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
