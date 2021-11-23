import React from "react";
import styled from "styled-components";

const StaticPageStyle = styled.div`
  .main {
    margin-top: 20px;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    padding-bottom: 50px;
    padding-left: 20px;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    color: #023581;
  }
  .step p {
    padding-left: 20px;
    color: #023581;
    margin: 10px 0;
    font-size: 18px;
  }
  .step-image {
    border-radius: 7px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    img {
      width: 770px;
      border-radius: 7px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
  @media screen and (max-width: 1220px) {
    .step-image img {
      width: 600px;
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      border-left: none;
      padding-left: 0;
    }
    .title {
      text-align: center;
    }
  }
  @media screen and (max-width: 760px) {
    .step-image img {
      width: 500px;
    }
  }
  @media screen and (max-width: 560px) {
    .step-image img {
      width: 400px;
    }
  }
  @media screen and (max-width: 400px) {
    .step-image img {
      width: 350px;
    }
    .title {
      font-size: 16px;
    }
    .step p {
      padding-left: 12px;
      color: #023581;
      margin: 5px 0;
      font-size: 12px;
    }
  }
  .step-title {
    font-size: 20px;
    color: #023581;
    font-weight: 500;
  }
  .note {
    color: #ff9800 !important;
    text-decoration: underline;
    font-style: italic;
  }
`;

const StaticPage = (props) => {
  return <StaticPageStyle {...props} />;
};

export default StaticPage;
