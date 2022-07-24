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

  const closeMenuAndDropDowns = () => {
    setIsBurgerOpen(false);
    setIsOfferOpen(false);
    setIsWorkOpen(false);
    document.body.style.overflow = "unset";
  };

  const toggleBodyLock = () => {
    if (!isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleWork = () => {
    setIsOfferOpen(false);
    setIsWorkOpen(!isWorkOpen);
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
        <HeaderLogoContainer
          to="/dacar"
          onClick={() => closeMenuAndDropDowns()}
        >
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
          onClick={() => {
            setIsBurgerOpen(!isBurgerOpen);
            toggleBodyLock();
          }}
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
              <HeaderLink
                to="/dacar/work"
                onClick={() => closeMenuAndDropDowns()}
              >
                Praca
              </HeaderLink>
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
                  <HeaderDropDownLink
                    to="/dacar/work/uber"
                    onClick={() => closeMenuAndDropDowns()}
                  >
                    <span>Uber Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink
                    to="/dacar/work/bolt"
                    onClick={() => closeMenuAndDropDowns()}
                  >
                    <span>Bolt Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink
                    to="/dacar/work/free-now"
                    onClick={() => closeMenuAndDropDowns()}
                  >
                    <span>FreeNow Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer isDropDownOpen={isOfferOpen}>
            <HeaderItem>
              <HeaderLink
                to="/dacar/offer"
                onClick={() => closeMenuAndDropDowns()}
              >
                Oferta
              </HeaderLink>
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
                  <HeaderDropDownLink
                    to="/dacar/offer/driver"
                    onClick={() => closeMenuAndDropDowns()}
                  >
                    <span>Kierowca</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
                <HeaderDropDownItem>
                  <HeaderDropDownLink
                    to="/dacar/offer/vehicles"
                    onClick={() => closeMenuAndDropDowns()}
                  >
                    <span>Pojazdy</span>
                  </HeaderDropDownLink>
                </HeaderDropDownItem>
              </HeaderDropDownContainer>
            </HeaderDropDown>
          </HeaderItemContainer>

          <HeaderItemContainer>
            <HeaderItem>
              <HeaderLinkScroll
                onClick={() => closeMenuAndDropDowns()}
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
