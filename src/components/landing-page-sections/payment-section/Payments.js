import React from "react";
import Section from "../../section/Section";
import Title from "../../title/Title";
import PaymentList from "./PaymentList";

const Payments = (props) => {
  return (
    <Section
      secondary
      style={{
        paddingBottom: "20px",
      }}
    >
      <Title>TO‘LOV USULLARI</Title>
      <PaymentList />
    </Section>
  );
};

export default Payments;
