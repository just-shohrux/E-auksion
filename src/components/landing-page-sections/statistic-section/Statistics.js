import React from "react";
import StatisticList from "./StatisticList";
import statisticsBackground from "../../../assets/images/home-bg-statistics.png";
import Title from "../../title/Title";
import Container from "../../container/Container";
import Section from "../../section/Section";

const Statistics = (props) => {
  return (
    <Section
      style={{
        backgroundImage: `url(${statisticsBackground})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover/center",
        backgroundColor: " #023581",
        paddingBottom: "20px",
      }}
    >
      <Title
        style={{
          color: "#fff",
        }}
      >
        BIZNING STATISTIKA
      </Title>
      <Container>
        <StatisticList />
      </Container>
    </Section>
  );
};

export default Statistics;
