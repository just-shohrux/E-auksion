import React from "react";
import styled from "styled-components";
import ParticipatingPage from "../../pages/static-pages/ParticipatingPage";
import Accordion from "../accordion/Accordion";
import Participating from "../participating";
const HelpStyle = styled.div`
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

const Help = () => {
  return (
    <HelpStyle>
      <Accordion />
      <Participating />
    </HelpStyle>
  );
};

export default Help;
