import React from "react";
import styled from "styled-components";

const ButtonEl = styled.a`
  display: inline-block;
  text-transform: uppercase;
  padding: 1.6rem 4.2rem;
  border: 1px solid var(--col-light);
  background-color: transparent;
  font-size: 1.6rem;
  letter-spacing: 5px;
  font-family: var(--col-secondary);
  transition: all 0.5s;
  cursor: pointer;
  color: var(--col-light);
  text-align: center;

  &:hover {
    background-color: var(--col-dark);
    color: var(--col-light);
  }
`;

const Button = ({ children }: { children: string }) => {
  return <ButtonEl>{children}</ButtonEl>;
};

export default Button;
