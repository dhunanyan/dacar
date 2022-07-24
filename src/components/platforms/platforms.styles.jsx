import styled, { css } from "styled-components";

export const PlatformsWrapper = styled.section`
  min-height: 800px;
  background: linear-gradient(180deg, #393b44, #737b84);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const PlatformsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
    width: calc(100% - 30px);
  }
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
  z-index: 2;

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
  align-items: center;
  position: relative;
  z-index: 2;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.5),
    rgba(248, 248, 248, 0.7)
  );
  border-radius: 20px;
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  padding: 15px;
  color: #515151;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const PlatformsCardsContainer = styled.ul`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  margin: 0 25px 0 0;

  @media (max-width: 550px) {
    margin: 0 0 25px 0;
  }
`;

export const PlatformsImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: row;
  }
`;

export const PlatformsImage = styled.div`
  border-radius: 20px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 5px 0;

  img {
    width: 100%;
  }

  @media (max-width: 550px) {
    margin: 0 5px;
  }

  @media (max-width: 350px) {
    width: 65px;
    height: 65px;
  }
`;

export const PlatformsDescr = styled.li`
  font-size: 16px;
  margin: 5px 0;
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
