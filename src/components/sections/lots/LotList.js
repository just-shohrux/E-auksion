import React from "react";
import Lot from "./Lot";
import lots from "../../../mock/lot-content";
import Flex from "../../flex/Flex";

const LotList = (props) => {
  return (
    <Flex wrap justify>
      {lots.map((lots) => (
        <Lot
          key={lots.id}
          title={lots.title}
          image={lots.image}
          number={lots.number}
        />
      ))}
    </Flex>
  );
};

export default LotList;
