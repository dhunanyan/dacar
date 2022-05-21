import styled, { css } from "styled-components";
import { Grow } from "@material-ui/core";

export const CarDetailsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  pointer-events: ${({ isActive }) => (!isActive ? "none" : "all")};
`;

export const CarDetailsBackgroundGrow = styled(Grow)`
  pointer-events: ${({ isActive }) => (!isActive ? "none" : "all")};
`;

export const CarDetailsBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to left top,
    rgba(144, 144, 144, 0.8),
    rgba(144, 144, 144, 0.97)
  );
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CarDetailsContainer = styled.div`
  margin: auto;
  max-width: 900px;
  height: 430px;
  width: 100%;
  position: relative;
  background: linear-gradient(
    to left top,
    rgba(48, 48, 48, 1),
    rgba(48, 48, 48, 1)
  );
  border-radius: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CarDetailsNotAvailable = css`
  content: "Niedostępny";
  background: linear-gradient(
    to left top,
    rgba(144, 144, 144, 0.8),
    rgba(144, 144, 144, 0.97)
  );
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  color: #303030;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const CarDetailsImage = styled.div`
  position: relative;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  min-width: 480px;
  height: calc(100%);
  border-radius: 10px;
  overflow: hidden;

  &:before {
    ${({ isAvailable }) => (isAvailable ? null : CarDetailsNotAvailable)};
  }
`;

export const CarDetailsTop = styled.div`
  background: linear-gradient(135deg, #74d680, #67a26f);
  position: relative;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px;
`;

export const CarDetailsBottom = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
`;

export const CarDetailsCloseButton = styled.button`
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: rgba(192, 192, 192, 0.9);
  transition: all 120ms ease-out;
  margin: 0 0 0 auto;

  &:hover {
    color: #f1f1f1;
    transform: scale(1.1);
  }
`;

export const CarDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 0 0 0 30px;
  overflow: hidden;
`;

export const CarDetailsDescr = styled.p`
  padding: 0 15px;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(192, 192, 192, 0.9);

  span:last-of-type {
    color: #f1f1f1;
  }

  &:nth-of-type(0),
  &:nth-of-type(2),
  &:nth-of-type(4) {
    background-color: #414141;
  }

  &:nth-of-type(1),
  &:nth-of-type(3),
  &:nth-of-type(5) {
    background-color: #525252;
  }
`;

export const CarDetailsButtonContainer = styled.div`
  display: flex;
  height: 50px;
  padding: 0 30px 30px 30px;
`;

export const CarDetailsButton = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 500;
  color: #d0d0d0;
  background: linear-gradient(135deg, #74d680, #67a26f);
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    transition: all 80ms ease-out;
    margin: 0 0 0 auto;
  }

  &:hover {
    color: #f1f1f1;

    span {
      transform: translate(-35px, 0);
    }

    img {
      transform: scale(1.1) rotate(45deg);
      opacity: 1;
    }
  }
`;

export const CardDetailsLogo = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.8;
  margin: 0 0 0 auto;
  transition: all 100ms ease-out;
`;
