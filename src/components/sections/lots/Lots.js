import React from "react";
import Title from "../../title";
import LotList from "./LotList";
import Button from "../../button/Button";
import Flex from "../../flex";
import Container from "../../container";

const Lots = (props) => {
  return (
    <section className="section section-secondary">
      <Title>LOTLAR RO‘YXATI</Title>
      <Container>
        <LotList />
      </Container>
      <Flex justify>
        <Button>Barchasini ko‘rish</Button>
      </Flex>
    </section>
  );
};

export default Lots;
