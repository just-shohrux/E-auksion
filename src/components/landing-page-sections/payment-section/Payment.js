import React from "react";
import styled from "styled-components";

const PaymentStyle = styled.div`
  .payment-card {
    cursor: pointer;
  }
  .payment-card img {
    width: 230px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    .payment-card img {
      width: 300px;
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
