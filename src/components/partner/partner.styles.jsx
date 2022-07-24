import styled, { css } from "styled-components";

export const PartnerWrapper = styled.section`
  min-height: 600px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const PartnerContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
    width: calc(100% - 30px);
  }
`;

export const PartnerContent = styled.div`
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.7),
    rgba(248, 248, 248, 0.8)
  );
  width: calc(100% - 60px);
  padding: 30px;
  border-radius: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    width: calc(100% - 30px);
  }
`;

export const PartnerContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnerTitle = styled.h1`
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
`;

export const PartnerDescrs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 30px 0 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const PartnerDescr = styled.p`
  font-size: 18px;
  margin: 0 0 20px 0;
  color: #525252;
  line-height: 24px;
`;

const BenefitsCircle = css`
  background: linear-gradient(135deg, #74d680, #67a26f);
  border-radius: 50%;
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 0;
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

export const PartnerButton = styled.button`
  max-width: 300px;
  background: linear-gradient(180deg, #74d680, #67a26f);
  border-radius: 10px;
  font-size: 22px;
  padding: 10px 20px;
  width: 100%;
  color: #ededed;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 150ms ease-out;
  margin: 30px 0 0 auto;
  text-align: center;

  &:hover {
    transform: translate(15px, 0);
    div {
      animation: rotateKeys 400ms ease-out forwards;
    }
  }

  div {
    margin: 0 0 0 10px;
    transition: all 150ms ease-out;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  @keyframes rotateKeys {
    0% {
    }
    1% {
      transform: scale(1) rotate(25deg);
    }
    50% {
      transform: scale(1.3) rotate(-25deg);
    }
    100% {
      transform: scale(1.3) rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    margin: 15px 0 0;
    padding: 6px 15px;
    font-size: 16px;
    width: auto;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
