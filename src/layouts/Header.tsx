import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CancelIcon from "../images/icon-close.svg";
import NavList from "../components/NavList";
import { Wrapper } from "../styles/shared";
import Logo from "../components/Logo";

const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.7s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: var(--col-light);
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);
`;

const DesktopNavigation = styled.nav`
  display: none;
  ${media.tablet} {
    display: block;
  }
`;

const HamburgerWrapper = styled.div`
  cursor: pointer;
  ${media.tablet} {
    display: none;
  }
`;

const Header = ({
  isMenuActive,
  setIsMenuActive,
}: {
  isMenuActive: boolean;
  setIsMenuActive: (val: boolean) => void;
}) => {
  return (
    <HeaderEl>
      <HeaderWrapper>
        <div>
          <Logo />
        </div>

        <div>
          <DesktopNavigation>
            <NavList />{" "}
          </DesktopNavigation>
          <HamburgerWrapper>
            {isMenuActive ? (
              <CancelIcon onClick={() => setIsMenuActive(false)} />
            ) : (
              <HamburgerIcon onClick={() => setIsMenuActive(true)} />
            )}
          </HamburgerWrapper>
        </div>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
