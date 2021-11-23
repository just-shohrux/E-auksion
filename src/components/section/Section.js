import React from "react";
import styled, { css } from "styled-components";

const StyledSection = styled.div`
  background-color: #fff;
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #ebf3ff;
    `};
`;
const Section = (props) => {
  return <StyledSection {...props} />;
};

export default Section;
