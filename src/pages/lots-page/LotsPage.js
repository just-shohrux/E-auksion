import React from "react";
import styled from "styled-components";

const LotsPageStyle = styled.main`
  padding: 114px 150px 0 150px;
  display: flex;
  aside {
    width: 25%;
    border: 1px solid red;
    height: 700px;
  }
  section {
    margin-left: 15px;
    border: 1px solid red;
    width: 75%;
    height: 700px;
  }
`;

const LotsPage = () => {
  return (
    <LotsPageStyle>
      <aside></aside>
      <section>
        <div className="filter"></div>
        <div className="lot-card">
          <div className="lot-img"></div>
          <div className="lot-information">
            <div className="lot-date"></div>
            <div className="lot-date"></div>
          </div>
        </div>
      </section>
    </LotsPageStyle>
  );
};

export default LotsPage;
