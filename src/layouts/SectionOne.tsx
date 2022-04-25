import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import dataArr from "../data.json";
import Feature from "../components/Feature";

const Section = styled.section`
  padding: 14rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 128rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  width: 95vw;

  ${media.tablet} {
    display: flex;
    padding-top: 20rem;
  }

  ${media.laptop} {
    align-items: stretch;
    padding-top: 24rem;
  }
`;

const Divider = styled.div`
  width: 180px;
  height: 1px;
  background-color: var(--col-gray);
  margin-inline: auto;

  ${media.laptop} {
    margin-inline: 0 auto;
  }
`;

const Heading = styled.h2`
  font-size: 4.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;

  ${media.laptop} {
    text-align: left;
    margin-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 6rem;

  ${media.laptop} {
    gap: 3rem;
  }
`;

const SectionOne = () => {
  return (
    <Section>
      <Divider />
      <Heading>We&apos;re different</Heading>
      <Grid>
        {dataArr.map((data) => (
          <Feature key={data.title} data={data} />
        ))}
      </Grid>
    </Section>
  );
};

export default SectionOne;
