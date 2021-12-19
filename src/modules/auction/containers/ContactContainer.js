import React from "react";
import Contact from "../../../components/contact";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";

const ContactContainer = () => {
  return (
    <>
      <nav className="breadcrumb">
        <Breadcrumb />
      </nav>
      <main>
        <Contact />
      </main>
    </>
  );
};

export default ContactContainer;
