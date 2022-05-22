import { Link } from "react-router-dom";
import styled from "styled-components";

export const OurOfferCardContainer = styled.div`
  padding: 15px;
  width: calc(30% - 90px);
  flex-grow: 100;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 330px;
  background-color: red;
  margin: 15px;
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.5),
    rgba(248, 248, 248, 0.7)
  );
  border-radius: 20px;
  box-shadow: 6px 6px 20px rgba(48, 48, 48, 0.2);
  backdrop-filter: blur(12px);
  z-index: 1;
  text-align: center;
`;

export const OurOfferCardImg = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  border-radius: 10px;
  overflow: hidden;
`;

export const OurOfferCardContent = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const OurOfferCardTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
`;

export const OurOfferCardDescr = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0 20px 0;
`;

export const OurOfferCardLink = styled(Link)`
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #f0f0f0;
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
