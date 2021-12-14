import React from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LotList from "../../../components/lots/LotList";
const LotsListContainer = ({ ...props }) => {
  return (
    <main>
      <Breadcrumb />
      <LotList />
    </main>
  );
};

export default LotsListContainer;
