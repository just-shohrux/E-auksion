import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SearchIcon = styled(FaSearch)`
  color: #fff;
`;
const ArrowLeft = styled(AiOutlineArrowLeft)`
  font-size: 40px;
  color: #023581;
`;
const VerifyLoginPageStyle = styled.div`
  padding-top: 114px;
  display: flex;
  justify-content: center;
  .verify {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .verify-login-title {
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    padding-bottom: 10px;
    color: #023581;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    border-bottom: 4px solid #e9ac1c;
    width: 80%;
    .icon {
      cursor: pointer;
      width: 10%;
      justify-content: flex-start;
    }
    .text {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 90%;
      align-items: center;
      padding-right: 10%;
    }
  }
  .card {
    width: 700px;
    margin-top: 20px;
    padding: 60px 70px 60px 70px;
    border: 1px solid rgba(3, 58, 141, 0.2);
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
      0 3px 1px -2px rgb(0 0 0 / 12%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .note {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f2c037;
    letter-spacing: 0.5px;
    border-radius: 4px;
    background-color: #f9e09b;
    p {
      font-size: 14m;
      color: #000000;
      text-align: justify;
      padding: 5px 16px;
    }
  }
  .card-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .form-floating {
    width: 75%;
  }
  .search-button {
    cursor: pointer;
    background-color: #023581;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    span {
      margin-right: 10px;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    .card {
      width: 600px;
      margin-top: 20px;
      padding: 50px 50px 30px 50px;
    }
  }
  @media screen and (max-width: 768px) {
    .card {
      width: 500px;
      margin-top: 20px;
      padding: 50px 50px 30px 50px;
    }
  }
  @media screen and (max-width: 560px) {
    .card {
      width: 400px;
      margin-top: 20px;
      padding: 20px 20px 20px 20px;
    }
    .form-floating {
      width: 60%;
    }
    .search-button {
      width: 35%;
    }
  }
  @media screen and (max-width: 400px) {
    .card {
      width: 350px;
      margin-top: 20px;
      padding: 10px 10px 30px 10px;
    }
    .note p {
      text-align: start;
      font-size: 12px;
    }
  }
`;

const VerifyLoginPage = () => {
  return (
    <VerifyLoginPageStyle>
      <div className="verify">
        <div className="verify-login-title">
          <div className="icon">
            <ArrowLeft />
          </div>
          <div className="text">Loginni aniqlash</div>
        </div>
        <div className="card">
          <div className="note">
            <p>
              <strong>Eslatma:</strong> Loginni aniqlash uchun jismoniy shaxslar
              o‘zlariga tegishli JSHSHIR ni yoki yuridik shaxslar STIR
              ma’lumotlarini kiritishi zarur!
            </p>
          </div>
          <div className="card-bottom">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">STIR yoki JSHSHIR</label>
            </div>
            <div className="search-button">
              <span>Izlash</span>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </VerifyLoginPageStyle>
  );
};

export default VerifyLoginPage;
