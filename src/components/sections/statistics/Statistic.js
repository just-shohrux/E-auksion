import React from "react";
import styled from "styled-components";
import statisticsBorder from "../../../assets/images/home-statistics-count-line.png";

const StatisticStyle = styled.div`
  .statistic {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
  }
  .statistic-icon,
  .statistic-count {
    margin-bottom: 15px;
  }
  .statistic-count h1 {
    font-size: 50px;
    color: #ffffff;
    padding-top: 10px;
  }
  .statistic-title {
    height: 40px;
  }
  .statistic-title p {
    color: #fff;
    font-size: 18px;
  }
  @media (max-width: 1540px) {
    .statistic {
      width: 240px;
      padding: 10px 0;
    }
    .statistic-count h1 {
      font-size: 30px;
    }
    .statistic-icon,
    .statistic-count {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1280px) {
    .statistic {
      width: 160px;
      padding: 10px 0;
    }
    .statistic-icon img {
      width: 35px;
      height: 35px;
    }
    .statistic-count h1 {
      font-size: 20px;
    }
    .statistic-title p {
      font-size: 12px;
    }
    .statistic-icon,
    .statistic-count {
      margin-bottom: 5px;
    }
  }
  @media (max-width: 540px) {
    .statistic {
      width: 120px;
    }
  }
`;

const Statistic = (props) => {
  return (
    <StatisticStyle>
      <div className="statistic">
        <div className="statistic-icon">
          <img src={props.image} />
        </div>
        <div className="statistic-count">
          <h1>{props.count}</h1>
        </div>
        <div className="statistic-border">
          <img src={statisticsBorder} />
        </div>
        <div className="statistic-title">
          <p>{props.title}</p>
        </div>
      </div>
    </StatisticStyle>
  );
};

export default Statistic;
