import React from "react";
import Title from "../../title";
import LotList from "./LotList";
import Button from "../../button/Button";
import Section from "../../section";
import Flex from "../../flex";
import Container from "../../container";

const Lots = (props) => {
  return (
    <Section secondary>
      <Title>LOTLAR RO‘YXATI</Title>
      <Container>
        <LotList />
      </Container>
      <Flex justify>
        <Button>Barchasini ko‘rish</Button>
      </Flex>
    </Section>
  );
};

export default Lots;
