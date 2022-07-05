import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderDropDown,
  HeaderDropDownContainer,
  HeaderDropDownItem,
  HeaderDropDownLink,
  HeaderImg,
  HeaderItem,
  HeaderItemContainer,
  HeaderLink,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoText,
  HeaderLogoTitle,
  HeaderNav,
  HeaderToggleIcon,
  HeaderToggleIconContainer,
  HeaderWrapper,
} from "./header.styles";

import logo from "../../assets/logoGreen.png";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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

        <HeaderToggleIconContainer
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <HeaderToggleIcon isBurgerOpen={isBurgerOpen}>
            <span />
            <span />
            <span />
          </HeaderToggleIcon>
        </HeaderToggleIconContainer>
        <HeaderNav>
          <HeaderItemContainer>
            <HeaderItem isDropDown={false}>
              <HeaderLink to="/work">Praca</HeaderLink>
            </HeaderItem>

            <HeaderDropDown isDropDown={true}>
              <HeaderDropDownContainer>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/work/uber">
                    <span>Uber Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/work/bolt">
                    <span>Bolt Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/work/free-now">
                    <span>FreeNow Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer>
            <HeaderItem isDropDown={false}>
              <HeaderLink to="/offer">Oferta</HeaderLink>
            </HeaderItem>

            <HeaderDropDown isDropDown={true}>
              <HeaderDropDownContainer>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/offer/driver">
                    <span>Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/offer/vehicles">
                    <span>Pojazdy</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer>
            <HeaderItem isDropDown={false}>
              <HeaderLink to="/contact">Kontakt</HeaderLink>
            </HeaderItem>
          </HeaderItemContainer>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
