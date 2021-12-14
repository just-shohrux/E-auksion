import React from "react";
import styled from "styled-components";
import Accordion from "../accordion/Accordion";
import Participating from "../participating";
const AboutAuctionStyle = styled.div`
  display: flex;
  padding: 0 150px 100px 150px;
  @media screen and (max-width: 1500px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const AboutAuction = () => {
  return (
    <AboutAuctionStyle>
      <Accordion />
      <Participating />
    </AboutAuctionStyle>
  );
};

export default AboutAuction;
