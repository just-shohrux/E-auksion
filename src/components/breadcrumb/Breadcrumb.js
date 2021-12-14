import React from "react";
import styled from "styled-components";

const BreadcrumbStyle = styled.div`
  padding-top: 114px;
  padding-bottom: 20px;
  .breadcrumb-title {
    padding: 0 150px;
    height: 36px;
    width: 100%;
    background-color: #ebf3ff;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 1500px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 40px;
  }
`;

const Breadcrumb = () => {
  return (
    <BreadcrumbStyle>
      <div className="breadcrumb-title">Asosiy sahifa /</div>
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;
