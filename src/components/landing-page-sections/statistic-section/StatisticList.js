import React from "react";
import styled from "styled-components";
import Container from "../../container/Container";
import Flex from "../../flex/Flex";
import content from "../../../mock/statistics-content";
import Statistic from "./Statistic";

const StatisticListStyle = styled.div`
  @media (max-width: 1400px) {
    .statistic-list {
      padding: 0 20px;
    }
  }

  @media (max-width: 1024px) {
    .statistic-list {
      padding: 0 80px;
    }
  }

  @media (max-width: 768px) {
    .statistic-list {
      padding: 0 30px;
    }
  }
  @media (max-width: 400px) {
    .statistic-list {
      padding: 0 10px;
    }
  }
`;

const StatisticList = (props) => {
  return (
    <Container>
      <Flex wrap justify>
        {content.map((content) => (
          <Statistic
            key={content.id}
            image={content.image}
            title={content.title}
            count={content.count}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default StatisticList;
