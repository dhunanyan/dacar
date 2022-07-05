import styled from "styled-components";
import { motion } from "framer-motion";

export const CarWrapper = styled.div`
  width: calc(30% - 90px);
  min-width: 250px;
  height: 300px;
  flex-grow: 100;
  border-radius: 20px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: red;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.5),
    rgba(248, 248, 248, 0.7)
  );
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  text-align: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    div:last-of-type {
      top: 200px;
    }
  }
`;

export const CarImgContainer = styled.div`
  width: 100%;
  max-width: 403px;
  height: 300px;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const CarContainer = styled.div`
  position: absolute;
  top: 252px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  background-color: rgba(48, 48, 48, 0.95);
  transition: all 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  cursor: default;
`;

export const CarIcon = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${({ isAvailable }) =>
    isAvailable
      ? "linear-gradient(135deg, #74d680, #67a26f)"
      : "linear-gradient(135deg, #c72c2c, #ba3030)"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  svg {
    font-size: 32px;
    color: #f1f1f1;
  }
`;

export const CarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 403px;
  padding: 12px;
`;

export const CarTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 20px 0;
  color: #f1f1f1;
`;

export const CarBottom = styled.div`
  width: calc(100% - 24px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarDescr = styled.p`
  font-size: 14px;
  color: #f1f1f1;
  padding: 8px 12px;
  background-color: rgba(68, 68, 68, 0.95);
  border-radius: 8px;
`;

export const CarButton = styled(motion.button)`
  font-size: 14px;
  background: linear-gradient(
    135deg,
    rgba(116, 214, 127, 1),
    rgba(103, 162, 111, 1)
  );
  color: #f1f1f1;
  border-radius: 8px;
  padding: 8px 12px;
  line-height: 14px;
`;
