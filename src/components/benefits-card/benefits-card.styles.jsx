import styled from "styled-components";

export const BenefitsCardContainer = styled.div`
  padding: 15px;
  width: calc(30% - 90px);
  min-width: ${({ size }) => size.minWidth};
  flex-grow: 100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: ${({ size }) => size.height};
  background-color: red;
  margin: 15px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.5),
    rgba(248, 248, 248, 0.7)
  );
  border-radius: 20px;
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    min-width: 0;
    margin: 15px 0;
  }
`;

export const BenefitsCardIcon = styled.div`
  border-radius: 50%;
  background: linear-gradient(135deg, #74d680, #67a26f);
  padding: 20px;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  margin: 0 0 15px 0;
`;

export const BenefitsCardTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #414141;
`;

export const BenefitsCardDescr = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #515151;
`;
