import React, { useState } from "react";
import { VscTriangleUp as Triangle } from "react-icons/vsc";

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
  HeaderLinkScroll,
  HeaderLogo,
  HeaderLogoContainer,
  HeaderLogoText,
  HeaderLogoTitle,
  HeaderNav,
  HeaderToggleIcon,
  HeaderToggleIconContainer,
  HeaderDropDownButton,
  HeaderWrapper,
} from "./header.styles";

import logo from "../../assets/logoGreen.png";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  const toggleWork = () => {
    setIsOfferOpen(false);
    setIsWorkOpen(!isWorkOpen);
    console.log(isWorkOpen);
  };

  const toggleOffer = () => {
    setIsWorkOpen(false);
    setIsOfferOpen(!isOfferOpen);
  };

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
        <HeaderLogoContainer to="/dacar">
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
        <HeaderNav isBurgerOpen={isBurgerOpen} isActive={isHeaderActive}>
          <HeaderItemContainer isDropDownOpen={isWorkOpen}>
            <HeaderItem>
              <HeaderLink to="/dacar/work">Praca</HeaderLink>
            </HeaderItem>

            <HeaderDropDownButton
              isDropDownOpen={isWorkOpen}
              onClick={toggleWork}
            >
              <Triangle />
            </HeaderDropDownButton>

            <HeaderDropDown isDropDownOpen={isWorkOpen}>
              <HeaderDropDownContainer isDropDownOpen={isWorkOpen}>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/dacar/work/uber">
                    <span>Uber Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/dacar/work/bolt">
                    <span>Bolt Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/dacar/work/free-now">
                    <span>FreeNow Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer isDropDownOpen={isOfferOpen}>
            <HeaderItem>
              <HeaderLink to="/dacar/offer">Oferta</HeaderLink>
            </HeaderItem>

            <HeaderDropDownButton
              isDropDownOpen={isOfferOpen}
              onClick={toggleOffer}
            >
              <Triangle />
            </HeaderDropDownButton>

            <HeaderDropDown isDropDownOpen={isOfferOpen}>
              <HeaderDropDownContainer isDropDownOpen={isOfferOpen}>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/dacar/offer/driver">
                    <span>Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink to="/dacar/offer/vehicles">
                    <span>Pojazdy</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer>
            <HeaderItem>
              <HeaderLinkScroll
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                to="contact"
              >
                Kontakt
              </HeaderLinkScroll>
            </HeaderItem>
          </HeaderItemContainer>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
