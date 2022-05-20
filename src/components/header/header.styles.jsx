import { Link } from "react-router-dom";
import styled from "styled-components";

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
    !isActive ? "transparent" : "rgba(48, 48, 48, 0.85)"};
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

export const HeaderItem = styled.li`
  margin: 0 5px;
  padding: 8px 15px;

  &:last-of-type {
    margin: 0 0 0 5px;
  }
`;

export const HeaderLink = styled(Link)`
  color: #ededed;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  transition: all 200ms ease-out;

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 4px;
    width: 0%;
    background: linear-gradient(135deg, #74d680, #67a26f);
    transition: all 200ms ease-out;
    border-radius: 1px;
  }
`;
