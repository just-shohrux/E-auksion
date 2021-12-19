import React from "react";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Container from "../../../components/container/Container";
import LotsList from "../../../components/lots/LotList";
const LotsListContainer = ({ ...props }) => {
  return (
    <>
      <nav className="breadcrumb">
        <Breadcrumb />
      </nav>
      <main>
        <Container>
          <LotsList />
        </Container>
      </main>
    </>
  );
};

export default LotsListContainer;
