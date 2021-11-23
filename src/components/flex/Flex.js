import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => (justify ? "center" : "space-between")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
