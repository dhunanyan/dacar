import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderImg,
  HeaderItem,
  HeaderLink,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoText,
  HeaderLogoTitle,
  HeaderNav,
  HeaderWrapper,
} from "./header.styles";

import logo from "../../assets/logoGreen.png";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 110) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <HeaderWrapper isActive={isHeaderActive}>
      <HeaderContainer isActive={isHeaderActive}>
        <HeaderLogoContainer to="/">
          <HeaderLogo>
            <HeaderImg>
              <img src={logo} alt="Logo" />
            </HeaderImg>
            <HeaderLogoText>
              <HeaderLogoTitle>Dacar</HeaderLogoTitle>
            </HeaderLogoText>
          </HeaderLogo>
          <HeaderLogoTitle>Partner</HeaderLogoTitle>
        </HeaderLogoContainer>

        <HeaderNav>
          <HeaderItem>
            <HeaderLink to="#">Praca</HeaderLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderLink to="#">Oferta</HeaderLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderLink to="#">Pojazdy</HeaderLink>
          </HeaderItem>

          <HeaderItem>
            <HeaderLink to="#">Kontakt</HeaderLink>
          </HeaderItem>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
