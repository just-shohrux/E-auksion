import React from "react";
import styled from "styled-components";
import Flex from "../../components/flex";
import Title from "../../components/title";
import googleMap from "../../assets/images/google-map.png";

const ContactPageStyle = styled.div`
  padding-top: 114px;
  .contact-container {
    position: relative;
    width: 1600px;
    height: 900px;
    display: flex;
    justify-content: center;
    background-color: #ebf3ff;
    margin-bottom: 200px;
    margin-top: 100px;
  }
  .contact-title {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }
  .contact {
    flex-direction: column;
    justify-content: flex-start;
    display: flex;
    position: absolute;
    width: 85%;
    top: -15%;
    height: 70%;
    border: 1px solid #c2c6ce;
    background-color: #fff;
    padding: 10px;

    .contact-heading {
      display: flex;
      justify-content: center;
    }
    .contact-heading h2 {
      cursor: pointer;
      font-size: 26px;
      border-bottom: 3px solid #e9ac1c;
      color: #e9ac1c;
      padding: 10px;
    }
  }
  .contact-content {
    display: flex;
    justify-content: space-around;
  }
  .contact-map {
    position: absolute;
    width: 80%;
    bottom: -20%;
    height: 50%;
    border: 1px solid red;
    border: 1px solid #c2c6ce;
    background-color: #fff;
  }
  .contact-border {
    margin-top: 30px;
    background-color: #ebf3ff;
    width: 3px;
    height: 400px;
  }
  .contact-telephone,
  .contact-address {
    margin-top: 50px;
    width: 40%;
    display: flex;
    flex-direction: column;
  }
  .contact-telephone p {
    font-size: 20px;
    font-weight: 400;
    color: #023581;
    margin-bottom: 15px;
  }
  .contact-information {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    h2 {
      font-size: 24px;
      line-height: 1.1;
      color: #023581;
      padding-left: 0;
      border-bottom: 3px solid #e9ac1c;
      width: 150px;
      margin-bottom: 15px;
    }
    span {
      font-size: 18px;
      font-weight: 400;
      color: #023581;
    }
  }

  @media screen and (max-width: 1680px) {
    .contact-container {
      width: 1220px;
    }
  }

  @media screen and (max-width: 1280px) {
    .contact-container {
      width: 980px;
    }
  }

  @media screen and (max-width: 1024px) {
    .contact-container {
      width: 700px;
    }
  }

  @media screen and (max-width: 768px) {
    .contact-container {
      width: 550px;
      height: 800px;
    }
    .contact-title {
      margin-bottom: 0;
    }
    .contact-heading h2 {
      font-size: 22px;
    }
    .contact-telephone,
    .contact-address {
      margin-top: 30px;
      width: 80%;
      display: flex;
    }
    .contact-map {
      width: 95%;
      top: 60%;
    }
    .contact-border {
      display: none;
    }
    .contact-content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  @media screen and (max-width: 560px) {
    .contact-container {
      width: 365px;
      height: 700px;
    }
    .contact-telephone,
    .contact-address {
      margin-top: 10px;
      width: 100%;
      display: flex;
    }
    .contact-border {
      display: none;
    }
    .contact-content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    .contact-information h2 {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 375px) {
    .contact-container {
      width: 300px;
      display: flex;
      height: 600px;
      margin-bottom: 60px;
      margin-top: 50px;
    }
    .contact-map {
      top: 60%;
    }
    .contact-heading h2 {
      justify-content: center;
      font-size: 12px;
      text-align: center;
    }
    .contact-telephone,
    .contact-address {
      margin-top: 5px;
      width: 80%;
      display: flex;
    }
    .contact-border {
      display: none;
    }
    .contact-content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    .contact-information h2 {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .contact-telephone p {
      font-size: 12px;
    }

    .contact-information span {
      font-size: 12px;
    }
  }
`;

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <Flex column>
        <div className="contact-title">
          <Title>
            <h2>Bog‘lanish </h2>
          </Title>
        </div>
        <div className="contact-container">
          <div className="contact">
            <div className="contact-heading">
              <h2>Axborot xizmati</h2>
            </div>
            <div className="contact-content">
              <div className="contact-address">
                <div className="contact-information">
                  <h2>Manzil:</h2>
                  <span>
                    100000, Toshkent sh, Amir Temur shox ko‘chasi, 6-uy
                  </span>
                </div>
                <div className="contact-information">
                  <h2>Email:</h2>
                  <span>info@e-auksion.uz</span>
                </div>
              </div>
              <div className="contact-border"></div>
              <div className="contact-telephone">
                <p>
                  Agar Sizda savol tug‘ilgan bo‘lsa yoki qo‘shimcha ma’lumot
                  olishni xoxlasangiz, u holda bizga maktub yo‘llashingiz yoki
                  quyidagi telefon orqali bog‘lanishingiz mumkin.
                </p>
                <div className="contact-information">
                  <h2>Telefon:</h2>
                  <span> (71) 202-21-11 </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact-map"
            style={{
              backgroundImage: `url(${googleMap})`,
              backgroundRepeat: "repeat",
              backgroundSize: "cover/center",
              backgroundColor: " #023581",
            }}
          ></div>
        </div>
      </Flex>
    </ContactPageStyle>
  );
};

export default ContactPage;
