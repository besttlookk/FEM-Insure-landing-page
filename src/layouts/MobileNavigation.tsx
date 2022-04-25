import React from "react";
import styled from "styled-components";
import NavList from "../components/NavList";
import media from "../styles/media";

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: 50;
  background-color: var(--col-dark);
  background-image: url(/images/bg-pattern-mobile-nav.svg);
  background-repeat: no-repeat;
  background-position: 100% bottom;
  background-size: 100%;
  padding: calc(14rem) 2.4rem;

  &.active {
    transform: translateX(0);
  }

  ${media.tablet} {
    display: none;
  }
`;

const MobileNavigation = ({ isMenuActive }: { isMenuActive: boolean }) => {
  return (
    <Wrapper className={isMenuActive ? "active" : ""}>
      <nav>
        <NavList />{" "}
      </nav>
    </Wrapper>
  );
};

export default MobileNavigation;
