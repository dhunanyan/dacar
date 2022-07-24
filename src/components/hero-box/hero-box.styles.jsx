import styled from "styled-components";

export const HeroContent = styled.div`
  margin: 150px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.5),
    rgba(241, 241, 241, 0.2)
  );
  backdrop-filter: blur(16px);
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.3);
  max-width: 350px;

  @media (max-width: 768px) {
    margin: 0px 0 0 0;
    padding: 15px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 25px;
  line-height: 28px;
  font-weight: 700;
  margin: 0 0 35px 0;
  color: #ededed;
  line-height: 40px;

  span {
    padding: 2px 4px;
    border-radius: 8px;
    background: linear-gradient(135deg, #74d680, #67a26f);
  }
`;

export const HeroDescr = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #f1f1f1;
  margin: 0 0 35px 0;
  cursor: pointer;

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
`;

export const HeroButton = styled.button`
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
  justify-content: space-around;
  transition: all 150ms ease-out;

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
    padding: 6px 15px;
    font-size: 16px;
  }
`;
