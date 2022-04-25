import React, { useRef } from "react";
import styled from "styled-components";
import media from "../styles/media";

import NavItem from "./NavItem";

const ListEl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 2rem;
  }

  ${media.laptop} {
    gap: 3.2rem;
  }
`;

const NavList = () => {
  return (
    <ListEl>
      <NavItem label="How we work" />
      <NavItem label="Blog" />
      <NavItem label="Account" />
      <NavItem label="View plans" />
    </ListEl>
  );
};

export default NavList;
