import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderDropDown,
  HeaderDropDownContainer,
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
            <HeaderLink to="/work">Praca</HeaderLink>

            <HeaderDropDown>
              <HeaderDropDownContainer>
                <HeaderItem>
                  <HeaderLink to="/work/uber">Uber Kierowca</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink to="/work/bolt">Bolt Kierowca</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink to="/work/free-now">FreeNow Kierowca</HeaderLink>
                </HeaderItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItem>

          <HeaderItem>
            <HeaderLink to="/offer">Oferta</HeaderLink>

            <HeaderDropDown>
              <HeaderDropDownContainer>
                <HeaderItem>
                  <HeaderLink to="/offer/driver">Kierowca</HeaderLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderLink to="/offer/vehicles">Pojazdy</HeaderLink>
                </HeaderItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItem>

          <HeaderItem>
            <HeaderLink to="/contact">Kontakt</HeaderLink>
          </HeaderItem>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
