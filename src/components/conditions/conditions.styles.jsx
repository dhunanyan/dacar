import styled, { css } from "styled-components";

export const ConditionsWrapper = styled.div`
  min-height: 600px;
  background: linear-gradient(0deg, #393b44, #737b84);
  position: relative;
  overflow: hidden;
`;

export const ConditionsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ConditionsContent = styled.div`
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
`;

export const ConditionsContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConditionsTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: #d0d0d0;
  text-align: center;
  margin: 30px auto 45px auto;
  text-transform: uppercase;
  position: relative;
  z-index: 5;

  &:before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 150px;
    height: 6px;
    background: #d0d0d0;
    border-radius: 10px;
  }
`;

export const ConditionsSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;
  line-height: 18px;

  a {
    color: #67a26f;
    font-weight: 600;
    font-size: 18px;
    transition: all 150ms ease-out;

    &:hover {
      text-decoration: underline;
      color: #74d680;
    }
  }
`;

export const ConditionsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 0 30px;
  order: 1;
`;

export const ConditionsItem = styled.li`
  font-size: 16px;
  margin: 0 0 10px 0px;
  color: #525252;
  line-height: 18px;

  &:hover {
    span {
      &:before {
        transform: scale(1.3) translate(0, -8px) rotate(180deg);
      }
    }
  }

  span {
    margin: 0 0 0 35px;
    position: relative;

    &::before {
      transition: all 150ms ease-out;
      content: "";
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background: linear-gradient(180deg, #74d680, #67a26f);
      position: absolute;
      left: -26px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  + h3 {
    margin: 20px 0 0 0;
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

export const ConditionsButton = styled.button`
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
    transition: all 150ms ease-out;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 auto;

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
`;
