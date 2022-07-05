import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 90px;
  display: flex;
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  transition: all 150ms ease-out;
  background-color: rgba(48, 48, 48, 1);
`;

export const FooterContainer = styled.div`
  width: calc(100% - 60px);
  max-width: 1300px;
  padding: 5px 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 250ms ease-out;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const FooterLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 150ms ease-out;
  transform: scale(0.7) translate(-70px, 0);

  @media (max-width: 990px) {
    align-self: flex-start;
  }

  div {
    div {
      img {
        transition: all 150ms ease-out;
      }
    }
  }

  &:hover {
    div {
      div {
        img {
          transform: scale(1.15) rotate(45deg);
        }
      }
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  background: linear-gradient(135deg, #74d680, #67a26f);
  margin: 0 10px 0 0;
`;

export const FooterImg = styled.div`
  width: 34px;
  margin: 0px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const FooterLogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterLogoTitle = styled.p`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ededed;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 990px) {
    margin: 10px 0;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 18px;
  color: #d0d0d0;
  margin: 15px;
  transition: all 150ms ease-out;

  &:hover {
    color: #f1f1f1;
    text-decoration: underline;
  }
`;

export const FooterAuthor = styled.p`
  font-size: 16px;
  color: #f1f1f1;
  display: flex;
  align-items: center;
  margin: auto 0px 15px 5px;

  @media (max-width: 990px) {
    align-self: flex-end;
  }

  svg {
    color: #74d680;
    font-size: 22px;
    margin: 0 5px;
  }
`;
