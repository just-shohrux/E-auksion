import React from "react";
import Card from "../../card/Card";
import styled from "styled-components";

const CategoryStyle = styled.div`
  .card {
    width: 250px;
    height: 220px;
    transition: 1s ease;
    cursor: pointer;
    &:hover {
      transform: translate(0px, -10px);
      background: #023581;
      .categories-title h3 {
        color: #fff;
        font;
      }
    }
  }
  h2 {
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .categories-title h3 {
    margin-top: 10px;
    color: #023581;
    font-size: 18px;
  }
  
  }
  @media (max-width: 768px) {
    .card {
      width: 190px;
      height: 190px;

      img {
        width: 90px;
        height: 90px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }\
  @media (max-width: 376px) {
    .card {
      width: 160px;
      height: 160px;

      img {
        width: 70px;
        height: 70px;
      }
      h3 {
        font-size: 14px;
      }
    }
  }
`;

const Category = (props) => {
  return (
    <CategoryStyle>
      <Card>
        <div className="categories-image">
          <img src={props.image} />
        </div>
        <div className="categories-title">
          <h3>{props.title}</h3>
        </div>
      </Card>
    </CategoryStyle>
  );
};

export default Category;
