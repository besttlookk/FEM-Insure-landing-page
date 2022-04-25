import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { DataType } from "../types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;

  ${media.laptop} {
    text-align: start;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

export const Heading = styled.h3`
  font-size: 3rem;
  font-weight: 400;
`;

export const Paragraph = styled.p``;

const Feature = ({ data }: { data: DataType }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          alt={data.image}
          src={`/images/icon-${data.image}.svg`}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Heading>{data.title}</Heading>
      <Paragraph>{data.content}</Paragraph>
    </Wrapper>
  );
};

export default Feature;
