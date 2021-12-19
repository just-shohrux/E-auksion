import React from "react";
import Payment from "./Payment";
import content from "../../../mock/payment-content";
import Flex from "../../flex/Flex";
import Container from "../../container/Container";

const PaymentList = (props) => {
  return (
    <Container>
      <Flex wrap justify>
        {content.map((content) => (
          <Payment key={content.id} image={content.image} link={content.link} />
        ))}
      </Flex>
    </Container>
  );
};

export default PaymentList;
