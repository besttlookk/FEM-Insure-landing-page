import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import media from "../styles/media";

const Section = styled.section`
  padding-block: 8rem 24rem;

  ${media.tablet} {
    padding-block: 8rem 12rem;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding: 8rem 4rem;
  max-width: 128rem;
  margin: 0 auto;
  width: 85vw;
  background-color: var(--col-dark-violet);
  background-image: url(/images/bg-pattern-how-we-work-mobile.svg);
  background-size: auto 100%;

  background-repeat: no-repeat;
  background-position: right;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--col-light);
  line-height: 1.1;

  ${media.tablet} {
    text-align: start;
  }
`;

const SectionTwo = () => {
  return (
    <Section>
      <SectionWrapper>
        <Heading>Find out more about bow we work</Heading>
        <Button>How we work</Button>
      </SectionWrapper>
    </Section>
  );
};

export default SectionTwo;
