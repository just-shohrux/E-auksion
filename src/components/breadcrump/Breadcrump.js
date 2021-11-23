import React from "react";
import styled from "styled-components";

const BreadcrumpStyle = styled.div`
  padding: 0 150px;
  height: 36px;
  width: 100%;
  background-color: #ebf3ff;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1500px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 40px;
  }
`;

const Breadcrump = () => {
  return <BreadcrumpStyle>Asosiy sahifa /</BreadcrumpStyle>;
};

export default Breadcrump;
