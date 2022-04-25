import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";
import FbIcon from "../images/icon-facebook.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import PeninterestIcon from "../images/icon-pinterest.svg";
import InstaIcon from "../images/icon-instagram.svg";

const FooterEl = styled.footer`
  position: relative;
  background-color: #f5f5f5;
  background-image: url(/images/bg-pattern-footer-mobile.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;

  ${media.tablet} {
    background-image: url(/images/bg-pattern-footer-desktop.svg);
    background-size: auto;
  }
`;

const FooterWraper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 8rem 2.4rem;
`;

const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  text-transform: uppercase;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  padding-block: 3.5rem;

  ${media.tablet} {
    text-align: start;
  }
`;

const GridChild = styled.div`
  h4 {
    color: var(--col-gray);
    font-size: 1.6rem;
    margin-bottom: 3.5rem;
  }
`;

const Credit = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: none;
  text-align: center;

  transform: translateX(-50%);
  font-size: 1.6rem;
  color: var(--col-primary);
  font-weight: 700;

  a {
    color: var(--col-light);
    font-size: 1.6rem;
  }

  ${media.tablet} {
    display: block;
  }
`;

const FooterList = styled.ul`
  color: var(--col-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  li {
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 700;
  }

  ${media.tablet} {
    align-items: flex-start;

    li {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: white;
        transition: all 0.5s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <FooterWraper>
        <FooterHeader>
          <Logo />

          <Icons>
            <FbIcon />
            <TwitterIcon />
            <PeninterestIcon />
            <InstaIcon />
          </Icons>
        </FooterHeader>
        <Grid>
          <GridChild>
            <h4> Our company</h4>
            <FooterList>
              <li>How we work</li>
              <li>Why insure?</li>
              <li>View plans</li>
              <li>Reviews</li>
            </FooterList>
          </GridChild>
          <GridChild>
            <h4> Help me</h4>
            <FooterList>
              <li>Faq</li>
              <li>Terms to use</li>
              <li>Privacy policy</li>
              <li>Cokkies</li>
            </FooterList>
          </GridChild>{" "}
          <GridChild>
            <h4> Contact</h4>
            <FooterList>
              <li>Sales</li>
              <li>Support</li>
              <li>Live chat</li>
            </FooterList>
          </GridChild>{" "}
          <GridChild>
            <h4> Others</h4>
            <FooterList>
              <li>Careers</li>
              <li>Press</li>
              <li>Licences</li>
            </FooterList>
          </GridChild>
        </Grid>

        {/* <Credit>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/besttlookk"
            target="_blank"
            rel="noreferrer"
          >
            Prabhash Ranjan
          </a>
          .
        </Credit> */}
      </FooterWraper>
    </FooterEl>
  );
};

export default Footer;
