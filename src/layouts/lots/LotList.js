import React from "react";
import Lot from "./Lot";
import lots from "../../mock/lot-content";
import styled from "styled-components";

const LotListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const LotList = () => {
  return (
    <LotListStyle>
      {lots.map((lots) => (
        <Lot
          key={lots.id}
          title={lots.title}
          image={lots.image}
          number={lots.number}
        />
      ))}
    </LotListStyle>
  );
};

export default LotList;
