import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: #ffffff;
  background-color: #023581;
  padding: 5px 40px;
  line-height: 36px;
  border: 1px solid #023581;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
  text-align: center;
  margin: 20px 0;
  &:hover {
    background-color: #fff;
    color: #023581;
    font-weight: 500;
  }
  ${({ white }) =>
    white &&
    css`
      background-color: transparent !important;
      border: 1px solid #707070;
    `}
  @media screen and (max-width: 768px) {
    padding: 3px 30px;
    line-height: 30px;
    font-size: 12px;
  }
`;
const Button = ({ handleClick = () => {}, ...props }) => {
  return <StyledButton onClick={() => handleClick()} {...props} />;
};

export default Button;
