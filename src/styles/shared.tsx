import styled from "styled-components";
import media from "./media";

export const ImageWrapperShared = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const Wrapper = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
`;

export const Section = styled.section`
  max-width: 128rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
`;

export const Heading2 = styled.h2`
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 3.8rem;

  ${media.tablet} {
    font-size: 3rem;
    margin-bottom: 1.6rem;
  }

  ${media.laptop} {
    font-size: 3.4rem;
  }
`;
