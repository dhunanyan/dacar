import styled, { css } from "styled-components";

export const HowWrapper = styled.section`
  min-height: 800px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
`;

export const HowContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  overflow: hidden;
`;

export const HowContent = styled.div`
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.7),
    rgba(248, 248, 248, 0.8)
  );
  width: calc(100% - 60px);
  padding: 30px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
`;

export const HowTitle = styled.h1`
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
    bottom: -15px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 150px;
    height: 6px;
    background: #d0d0d0;
    border-radius: 10px;
  }
`;

export const HowList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HowItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 0 40px 80px;

  &:hover {
    &:before {
      transform: scale(1.1) translate(0, -25px) rotate(-340deg);
    }
  }

  &:before {
    transition: all 180ms ease-out;
    content: ${({ listItemId }) => `"${listItemId}"`};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: -80px;
    transform: scale(1) translate(0, -50%) rotate(20deg);
    height: 30px;
    width: 30px;
    padding: 15px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 600;
    color: #f1f1f1;
    background: linear-gradient(180deg, #74d680, #67a26f);
  }

  &:last-of-type {
    margin: 0 0 0px 80px;
  }
`;

export const HowSubItem = styled.li`
  font-size: 16px;
  margin: 0 0 7px 0px;
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
    margin: 0 0 0 55px;
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

  :first-of-type {
    margin: 14px 0 7px 0px;
  }
`;

export const HowItemSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #414141;
`;

export const HowItemDescr = styled.p`
  font-size: 14px;
  color: #525252;
  margin: 5px 0 0 0;

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

const HowCircle = css`
  background: linear-gradient(135deg, #74d680, #67a26f);
  border-radius: 50%;
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 0;
`;

export const HowCircle1 = styled.div`
  ${HowCircle}
  width: 450px;
  height: 450px;
  top: 140px;
  left: 70px;
`;

export const HowCircle2 = styled.div`
  ${HowCircle}
  width: 350px;
  height: 350px;
  bottom: 300px;
  right: 200px;
`;

export const HowCircle3 = styled.div`
  ${HowCircle}
  width: 160px;
  height: 160px;
  top: 180px;
  right: 20px;
`;

export const HowCircle4 = styled.div`
  ${HowCircle}
  width: 230px;
  height: 230px;
  left: 300px;
  bottom: 20px;
`;
