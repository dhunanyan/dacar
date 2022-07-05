import { Grow } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
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
`;

export const HeaderLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const HeaderImg = styled.div`
  width: 34px;
  margin: 0px 5px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const HeaderLogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderLogoTitle = styled.p`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ededed;
`;

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const HeaderItem = styled.div`
  min-width: 100%;
  min-height: 100%;
  margin: 10px 5px;

  &:last-of-type {
    margin: 0 0 0 5px;
  }
`;

export const HeaderLink = styled(Link)`
  color: #ededed;
  font-size: 20px;
  font-weight: 700;
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
  transition: all 120ms ease-out;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    top: 55px;
    opacity: 1;
    pointer-events: all;
  }
`;

export const HeaderDropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 150ms ease-out;
  text-align: center;
  min-width: 100%;
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
