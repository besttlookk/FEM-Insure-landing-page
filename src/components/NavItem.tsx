import React, { useState, useEffect } from "react";
import styled from "styled-components";
import media from "../styles/media";

const ItemEl = styled.li`
  transition: all 0.5s;
  font-size: 2.2rem;
  cursor: pointer;
  color: var(--col-light);
  text-transform: uppercase;
  letter-spacing: 1.8px;

  &:last-child {
    border: 1px solid var(--col-light);
    width: 100%;
    text-align: center;
    padding: 1.6rem 0;
  }

  ${media.tablet} {
    font-size: 1.4rem;
    color: var(--col-gray);

    &:hover {
      color: var(--col-dark);
    }

    &:last-child {
      border-color: var(--col-dark);
      width: initial;
      padding: 0.8rem 2.4rem;
      color: var(--col-dark);
      transition: all 0.5s;

      &:hover {
        background-color: var(--col-dark);
        color: var(--col-light);
      }
    }
  }

  ${media.laptop} {
    font-size: 1.6rem;
  }
`;

const NavItem = ({ label }: { label: string }) => {
  return <ItemEl>{label}</ItemEl>;
};

export default NavItem;
