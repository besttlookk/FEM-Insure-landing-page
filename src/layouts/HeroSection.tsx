import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import media from "../styles/media";
import { ImageWrapperShared, Wrapper } from "../styles/shared";

const Section = styled.section`
  background-color: var(--col-dark-violet);
  height: 92vh;

  ${media.tablet} {
    background-size: cover;
    height: 70vh;
    background-image: url(/images/bg-pattern-intro-left-desktop.svg),
      url(/images/bg-pattern-intro-right-desktop.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: left, right;
  }
`;

const SectionWrapper = styled(Wrapper)`
  padding: 0;

  ${media.tablet} {
    position: relative;
    height: 100%;
  }
`;

const Divider = styled.div`
  width: 200px;
  height: 1px;
  background-color: var(--col-gray);
  display: none;
  margin-bottom: 4rem;

  ${media.tablet} {
    display: block;
  }
`;

const Content = styled.div`
  padding: 8rem 2.4rem;
  text-align: center;
  background-image: url(/images/bg-pattern-intro-left-mobile.svg),
    url(/images/bg-pattern-intro-right-mobile.svg);

  background-repeat: no-repeat;
  background-position: top left, bottom right;
  ${media.tablet} {
    background-image: none;
    max-width: 70rem;
    padding: 2.8rem;
    height: 100%;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Heading = styled.h1`
  color: var(--col-light);
  font-size: 4.4rem;
  letter-spacing: 1.2px;
  line-height: 1;
  font-weight: 400;
  margin-bottom: 2.2rem;

  span {
    display: block;
  }

  ${media.laptop} {
    font-size: 6.2rem;
  }
`;

const ImageWrapper = styled(ImageWrapperShared)`
  background-image: url(/images/image-intro-mobile.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.tablet} {
    display: none;
  }

  ${media.laptop} {
    position: absolute;
    display: block;
    background-image: url(/images/image-intro-desktop.jpg);
    right: 0;

    bottom: -140px;
    width: 420px;
    height: 500px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 4rem;
`;
const HeroSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <ImageWrapper></ImageWrapper>
        <Content>
          <Divider />
          <Heading>
            Humanizing <span>your insurance.</span>
          </Heading>
          <p>
            {" "}
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <ButtonWrapper>
            <Button>View plans</Button>
          </ButtonWrapper>
        </Content>
      </SectionWrapper>
    </Section>
  );
};

export default HeroSection;
