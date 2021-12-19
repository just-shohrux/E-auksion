import React from "react";
import styled from "styled-components";
const BreadcrumbStyle = styled.div`
  width: 100%;
  .breadcrumb-title {
    padding: 10px 0;
    display: flex;
    align-items: center;
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
