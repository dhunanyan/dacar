import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeaderWrapper = styled.header`
  transition: all 150ms ease-out;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  min-height: 70px;
  display: flex;
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  transition: all 150ms ease-out;
  background-color: ${({ isActive }) =>
    !isActive ? "transparent" : "rgba(48, 48, 48, 0.95)"};

  @media (max-width: 768px) {
    background-color: rgba(30, 30, 30, 0.98);
  }
`;

export const HeaderContainer = styled.div`
  width: calc(100% - 60px);
  max-width: 1300px;
  padding: ${({ isActive }) => (!isActive ? "50px 30px" : "5px 30px")};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 250ms ease-out;
  @media (max-width: 768px) {
    padding: 5px 30px;
  }
`;

export const HeaderLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 150ms ease-out;

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

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  background: linear-gradient(135deg, #74d680, #67a26f);
  margin: 0 10px 0 0;
  transition: all 150ms ease-out;
`;

export const HeaderImg = styled.div`
  width: 34px;
  margin: 0px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-out;

  img {
    width: 100%;
  }
`;

export const HeaderLogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 150ms ease-out;
`;

export const HeaderLogoTitle = styled.p`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ededed;
  transition: all 150ms ease-out;
`;

export const HeaderToggleIconContainer = styled.button`
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 5px;
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  background: linear-gradient(
    to left top,
    rgba(248, 248, 248, 0.3),
    rgba(248, 248, 248, 0.5)
  );
  cursor: pointer;
  padding: 5px;
  display: none;
  transition: all 150ms ease-out;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerMenuOpened = css`
  transition: all 150ms ease-out;

  span {
    transition: all 150ms ease-out;

    &:nth-of-type(1) {
      width: 50%;
      left: 40%;
      top: 19%;
      transform: rotate(-45deg) translate(0, 19%);
    }

    &:nth-of-type(2) {
      width: 100%;
      top: 48%;
      left: -5%;
      transform: rotate(45deg) translate(0, -48%);
    }

    &:nth-of-type(3) {
      width: 50%;
      right: 40%;
      bottom: 19%;
      transform: rotate(-45deg) translate(0, -19%);
    }
  }
`;

const BurgerMenuClosed = css`
  transition: all 150ms ease-out;

  span {
    transition: all 150ms ease-out;

    &:nth-of-type(1) {
      width: 50%;
      left: 0;
      top: 0;
      transform: rotate(0) translate(0, 0);
    }

    &:nth-of-type(2) {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-0deg);
    }

    &:nth-of-type(3) {
      width: 50%;
      right: 0;
      bottom: 0;
      transform: rotate(0) translate(0, 0);
    }
  }
`;

export const HeaderToggleIcon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 150ms ease-out;

  span {
    background: linear-gradient(135deg, #292929, #292929);
    height: 6px;
    border-radius: 5px;
    display: block;
    position: absolute;
    transition: all 150ms ease-out;
  }

  ${({ isBurgerOpen }) => (isBurgerOpen ? BurgerMenuOpened : BurgerMenuClosed)}
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 200ms ease-out;

  @media (max-width: 768px) {
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    top: 70px;
    left: ${({ isBurgerOpen }) => (isBurgerOpen ? 0 : "-100%")};
    background-color: rgba(48, 48, 48, 0.95);
  }
`;

export const HeaderItemContainer = styled.li`
  position: relative;
  padding: 8px 15px;
  min-width: max-content;
  transition: all 150ms ease-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    &:hover {
      div {
        a {
          &::before {
            width: 100%;
          }
        }

        opacity: 1;
        pointer-events: all;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 8px 0;
    padding: 8px 15px;
    min-width: 100%;
    position: relative;
    max-height: ${({ isDropDownOpen }) => (isDropDownOpen ? "100%" : "30px")};
  }
`;

export const HeaderItem = styled.div`
  min-width: 100%;
  min-height: 100%;
  margin: 10px 5px;
  transition: all 150ms ease-out;

  &:last-of-type {
    margin: 0 0 0 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    min-height: auto;
    margin: 0;
    padding: 10px 0;
  }
`;

const Links = css`
  color: #ededed;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  min-width: max-content;
  width: 100%;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 4px;
    width: 0%;
    background: linear-gradient(135deg, #74d680, #67a26f);
    transition: all 120ms linear;
    border-radius: 1px;
  }
`;

export const HeaderLinkScroll = styled(LinkScroll)`
  ${Links}
`;

export const HeaderLink = styled(Link)`
  ${Links}
`;

export const HeaderDropDownButton = styled.button`
  border: 0;
  border-radius: 10px;
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  background: linear-gradient(
    to left top,
    rgba(64, 64, 64, 0.3),
    rgba(64, 64, 64, 0.5)
  );
  padding: 10px;
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 50px;
  width: 36px;
  height: 36px;
  display: none;

  svg {
    transition: all 150ms ease-out;
    color: #ededed;
    transform: ${({ isDropDownOpen }) =>
      isDropDownOpen ? "rotate(-180deg)" : "rotate(0deg)"};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const HeaderDropDown = styled.div`
  min-width: 220px;
  position: absolute;
  top: 45px;
  right: 0;
  border-radius: 10px;
  box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  background: linear-gradient(
    to left top,
    rgba(64, 64, 64, 0.3),
    rgba(64, 64, 64, 0.5)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 150ms ease-out;

  @media (min-width: 768px) {
    opacity: 0;
    pointer-events: none;

    &:hover {
      top: 55px;
      opacity: 1;
      pointer-events: all;
    }
  }

  @media (max-width: 768px) {
    min-width: calc(100% - 65px);
    position: static;
    opacity: 1;
    top: auto;
    left: auto;
    height: ${({ isDropDownOpen }) => (isDropDownOpen ? "100%" : 0)};
  }
`;

export const HeaderDropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100%;
  transition: all 150ms ease-out;

  @media (max-width: 768px) {
    opacity: ${({ isDropDownOpen }) => (isDropDownOpen ? 1 : 0)};
  }
`;

export const HeaderDropDownItem = styled.li`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:first-of-type {
    &::before {
      display: none;
    }
  }
  &::before {
    content: "";
    box-shadow: -1px 3px 5px -3px rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(12px);
    background: linear-gradient(
      to left top,
      rgba(248, 248, 248, 0.5),
      rgba(248, 248, 248, 0.7)
    );
    position: absolute;
    top: 0;
    left: 80px;
    width: calc(100% - 160px);
    height: 1px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    &::before {
      left: 40%;
      width: calc(100% - 80%);
    }
  }
`;

export const HeaderDropDownLink = styled(Link)`
  color: #ededed;
  font-size: 20px;
  font-weight: 700;
  padding: 15px;
  min-width: calc(100% - 30px);

  &:hover {
    span {
      &::before {
        width: 100%;
      }
    }
  }
  span {
    position: relative;
    min-width: max-content;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 4px;
      width: 0%;
      background: linear-gradient(135deg, #74d680, #67a26f);
      transition: all 120ms linear;
      border-radius: 1px;
    }
  }
`;
