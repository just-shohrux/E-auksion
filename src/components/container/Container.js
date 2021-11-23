import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 150px;
  display: flex;
  justify-content: center;
  @media (max-width: 1420px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
  }
`;
const Container = (props) => {
  return <StyledContainer {...props} />;
};

export default Container;
