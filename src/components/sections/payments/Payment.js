import React from "react";
import styled from "styled-components";

const PaymentStyle = styled.div`
  .payment-card {
    cursor: pointer;
  }
  .payment-card img {
    width: 255px;
    padding: 10px;
    margin: 5px;
  }
  @media (max-width: 1024px) {
    .payment-card img {
      width: 280px;
    }
  }
  @media (max-width: 768px) {
    .payment-card img {
      padding: 10px;
      width: 200px;
    }
  }
  @media (max-width: 375px) {
    .payment-card img {
      padding: 10px;
      width: 160px;
    }
  }
`;
const Payment = (props) => {
  return (
    <PaymentStyle>
      <div className="payment-card">
        <a href={props.link}>
          <img src={props.image} />
        </a>
      </div>
    </PaymentStyle>
  );
};

export default Payment;
