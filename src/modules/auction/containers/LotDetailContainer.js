import React from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LotDetail from "../../../components/detail";

const LotDetailContainer = ({ ...props }) => {
  return (
    <main>
      <Breadcrumb />
      <LotDetail />
    </main>
  );
};

export default LotDetailContainer;
