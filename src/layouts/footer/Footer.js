import React from "react";
import styled from "styled-components";
import tasix from "../../assets/images/collect.png";
import twitter from "../../assets/images/icons/twitter-icon.png";
import telegram from "../../assets/images/icons/telegram-icon.png";
import instagram from "../../assets/images/icons/instagram-icon.png";
import facebook from "../../assets/images/icons/facebook-icon.png";
import { FaPhone } from "react-icons/fa";

const FooterStyle = styled.footer`
  .footer {
    padding: 30px 0 20px 0;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 0 150px;
    align-items: center;
  }
  .float-left {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    img {
      width: 88px;
      height: 33px;
      margin-left: 20px;
    }
  }
  .float-left p {
    line-height: 1.5;
    font-size: 14px;
    color: #023581;
  }
  .float-right {
    display: flex;
    flex-direction: column;
  }
  .social-icon-list {
    display: flex;
  }
  .social-icon {
    background-color: rgba(64, 74, 139, 0.2);
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
  }
  .social-icon img {
    width: 22px;
  }
  .phone {
    display: flex;
    align-items: flex-end;
  }
  .phone1 {
    padding-right: 5px;
    line-height: 1.5;
    font-size: 14px;
    color: #023581;
  }
  .phone2 {
    font-size: 40px;
    font-weight: bold;
    color: #023581;
  }

  .phone-icon1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64, 74, 139, 0.3);
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }

  .phone-icon2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64, 74, 139, 0.5);
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
  .phone-icon3 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #404a8b;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  @media (max-width: 1600px) {
    .footer-container {
      justify-content: center;
      flex-wrap: wrap-reverse;
      padding: 0 50px;
      .float-right {
        margin-bottom: 20px;
        margin-right: 20px;
      }
    }
    .social-icon-list {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1024px) {
    .footer-container {
      padding: 0 150px;
    }
    .social-icon-list {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 768px) {
    .footer-container {
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
    .float-left-content {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .float-left img {
      display: none;
    }
    .float-right {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .social-icon-list {
      margin-bottom: 10px;
    }
    .phone2 {
      font-size: 22px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer">
        <div className="footer-container">
          <div className="float-left">
            <div className="float-left-content">
              <p>
                © Copyright 2017-2021. Barcha huquqlar himoyalangan <br />{" "}
                "Elektron onlayn-auksionlarni tashkil etish markazi" DUK
                tomonidan ishlab chiqilgan
              </p>
            </div>
            <div className="float-left-image">
              <img src={tasix} />
            </div>
          </div>
          <div className="float-right">
            <div className="social-icon-list">
              <div className="social-icon">
                <a href="#">
                  <img src={twitter} />
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={telegram} />
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={instagram} />
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <img src={facebook} />
                </a>
              </div>
            </div>

            <div className="phone">
              <div className="phone-icon1">
                <div className="phone-icon2">
                  <div className="phone-icon3">
                    <FaPhone />
                  </div>
                </div>
              </div>
              <div className="phone1">+998</div>
              <div className="phone2">71 202-21-11</div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};

export default Footer;
