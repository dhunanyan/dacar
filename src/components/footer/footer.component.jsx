import React from "react";

import logo from "../../assets/logoGreen.png";
import {
  FooterAuthor,
  FooterContainer,
  FooterImg,
  FooterLink,
  FooterLogo,
  FooterLogoContainer,
  FooterLogoText,
  FooterLogoTitle,
  FooterMenu,
  FooterWrapper,
} from "./footer.styles";

import { AiFillHeart as Heart } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogoContainer to="/dacar">
          <FooterLogo>
            <FooterImg>
              <img src={logo} alt="Logo" />
            </FooterImg>
            <FooterLogoText>
              <FooterLogoTitle>Dacar</FooterLogoTitle>
            </FooterLogoText>
          </FooterLogo>
          <FooterLogoTitle>Partner</FooterLogoTitle>
        </FooterLogoContainer>

        <FooterMenu>
          <FooterLink to="/dacar/work">Praca</FooterLink>
          <FooterLink to="/dacar/offer">Oferta</FooterLink>
          <FooterLink to="/dacar/contact">Kontakt</FooterLink>
        </FooterMenu>

        <FooterAuthor>
          Created with <Heart /> by Davit Hunanyan
        </FooterAuthor>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
