import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.h2`
  font-size: 28px;
  color: #023581;
  font-weight: 400;
  line-height: 1.5;
  padding: 20px 0;
  text-align: center
    ${({ white }) =>
      white &&
      css`
        color: #fff;
        z-index: 99;
      `};

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
