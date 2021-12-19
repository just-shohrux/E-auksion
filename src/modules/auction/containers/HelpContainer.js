import React from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Help from "../../../components/help";

const HelpContainer = () => {
  return (
    <>
      <nav className="breadcrumb">
        <Breadcrumb />
      </nav>
      <main>
        <Help />
      </main>
    </>
  );
};
export default HelpContainer;
