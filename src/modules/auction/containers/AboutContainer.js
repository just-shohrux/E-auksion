import React from "react";
import styled from "styled-components";
import Accordion from "../../../components/accordion/Accordion";
import Breadcrumb from "../../../components/breadcrump/Breadcrump";
import ParticipatingPage from "../../../pages/static-pages/ParticipatingPage";


const AboutActionPageStyle = styled.div`
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

const AboutContainer = (props) => {
    return (
        <div
            style={{
                paddingTop: "74px",
            }}
        >
            <Breadcrumb />
            <AboutActionPageStyle {...props}>
                <Accordion />
                <ParticipatingPage />
            </AboutActionPageStyle>
        </div>
    );
};

export default AboutContainer;
