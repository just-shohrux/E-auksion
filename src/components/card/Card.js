import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    font-size: 18px;
    margin: 5px;
    padding: 15px 15px 15px 15px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 12%);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
  }
  &:hover {
    border-radius: 7px;
    box-shadow: 0 2px 15px #023581;
    box-shadow: none;
  }

  h3 {
    color: #fff;
  }
`;

const Card = (props) => {
  const classes = "card " + props.className;
  return (
    <CardStyle>
      <div className={classes}>{props.children}</div>
    </CardStyle>
  );
};

export default Card;
