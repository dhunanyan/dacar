import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const CarDetailsContainer = styled(motion.div)`
  margin: auto;
  width: clamp(50%, 900px, 90%);
  min-height: 400px;
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
  justify-content: space-between;
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
  min-height: 100%;
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
  align-items: space-between;
  justify-content: space-between;
  min-height: 250px;
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
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  min-height: 100%;
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
