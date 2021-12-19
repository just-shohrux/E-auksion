import React from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LotDetail from "../../../components/detail";

const LotDetailContainer = ({ ...props }) => {
  return (
    <>
      <nav className="breadcrumb">
        <Breadcrumb />
      </nav>
      <main>
        <LotDetail />
      </main>
    </>
  );
};

export default LotDetailContainer;
