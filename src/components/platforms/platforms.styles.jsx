import styled, { css } from "styled-components";

export const PlatformsWrapper = styled.section`
  min-height: 800px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
  overflow: hidden;
`;

export const PlatformsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

export const PlatformsTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: #d0d0d0;
  text-align: center;
  margin: 30px auto 45px auto;
  text-transform: uppercase;
  position: relative;
  width: max-content;
  z-index: 1;

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

export const PlatformsCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const PlatformsDescr = styled.p`
  font-size: 16px;
`;

const PlatformsCircle = css`
  background: linear-gradient(135deg, #74d680, #67a26f);
  border-radius: 50%;
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 0;
`;

export const PlatformsCircle1 = styled.div`
  ${PlatformsCircle}
  width: 450px;
  height: 450px;
  top: 140px;
  left: 70px;
`;

export const PlatformsCircle2 = styled.div`
  ${PlatformsCircle}
  width: 350px;
  height: 350px;
  bottom: 300px;
  right: 200px;
`;

export const PlatformsCircle3 = styled.div`
  ${PlatformsCircle}
  width: 160px;
  height: 160px;
  top: 180px;
  right: 20px;
`;

export const PlatformsCircle4 = styled.div`
  ${PlatformsCircle}
  width: 230px;
  height: 230px;
  left: 300px;
  bottom: 20px;
`;
