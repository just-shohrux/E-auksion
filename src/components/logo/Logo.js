import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo_auction.png";

const StyledLogo = styled.div`
  img {
    width: 148px;
    height: 54px;
  }

  @media screen and (max-width: 1600px) {
    img {
      width: 120px;
    }
  }
  @media screen and (max-width: 1280px) {
    img {
      width: 100px;
      height: 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 80px;
      height: 35px;
    }
  }
`;
const Logo = (props) => {
  return (
    <StyledLogo {...props}>
      <img src={logo} alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
