import styled from "styled-components";

export const WorksWorkContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  height: 160px;
  background: linear-gradient(
    to left top,
    rgba(144, 144, 144, 0.8),
    rgba(144, 144, 144, 0.97)
  );
  margin: 20px 0;
`;

export const WorksWorkImage = styled.div`
  max-width: 250px;
  width: 100%;
  height: 160px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const WorksWorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 0 15px;
`;

export const WorksWorkTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #303030;
`;

export const WorksWorkDescr = styled.p`
  font-size: 14px;
  color: #414141;
  margin: 15px 0 0 0;
  line-height: 20px;
`;

export const WorksWorkButton = styled.button`
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #d0d0d0;
  background: linear-gradient(135deg, #74d680, #67a26f);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0 0 auto;
  transition: all 150ms ease-out;

  &:hover {
    color: #f1f1f1;
    transform: translate(-8px, 0);

    div {
      opacity: 1;
      transform: scale(1.1) rotate(45deg);
    }
  }

  div {
    transition: all 150ms ease-out;
    width: 25px;
    height: 25px;
    opacity: 0.8;
    margin: 0 0 0 5px;

    img {
      width: 100%;
    }
  }
`;
