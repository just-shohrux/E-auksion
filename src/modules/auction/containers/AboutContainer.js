import React from "react";
import AboutAuction from "../../../components/about/AboutAction";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

const AboutContainer = (props) => {
  return (
    <>
      <nav className="breadcrumb">
        <Breadcrumb />
      </nav>
      <main>
        <AboutAuction />
      </main>
    </>
  );
};

export default AboutContainer;
