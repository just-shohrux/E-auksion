import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ArrowLeft = styled(AiOutlineArrowLeft)`
  font-size: 40px;
  color: #023581;
`;

const RegisterStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  .register {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .register-title {
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
      width: 10%;
      justify-content: flex-start;
      cursor: pointer;
    }
    .text {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 90%;
      align-items: center;
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
  form {
    display: flex;
  }
  .form-check-input {
    width: 1.2em;
    height: 1.2em;
  }
  .form-check-inline {
    display: flex;
    flex-direction: row;
    height: 20px;
    align-items: center;
  }
  .form-check-inline label {
    padding-left: 10px;
    font-size: 18px;
    color: #023581;
  }

  .form-check-inline1 .form-check-input:checked {
    background-color: #1976d2 !important;
  }
  .form-check-inline1 .form-check-input:checked + label {
    color: #1976d2 !important;
    font-weight: 700;
  }

  .form-check-inline2 .form-check-input:checked {
    background-color: #ff9800 !important;
  }

  .form-check-inline2 .form-check-input:checked + label {
    color: #ff9800 !important;
    font-weight: 700;
  }

  .form-check-inline3 .form-check-input:checked {
    background-color: #00bcd4 !important;
  }
  .form-check-inline3 .form-check-input:checked + label {
    color: #00bcd4 !important;
    font-weight: 700;
  }
  .border-line {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  .form-floating {
    margin: 20px;
    width: 500px;
  }
  .validate-password {
    width: 500px;
    display: flex;
    justify-content: space-between;
    height: 12px;
    align-items: center;
  }
  .validate-password-step {
    height: 8px;
    width: 24%;
    background: #9e9e9e;
  }
  .step1 {
    background: #f44336;
  }
  .step2 {
    background: #ff9800;
  }
  .step3 {
    background: #ffeb3b;
  }
  .step4 {
    background: #4caf50;
  }
  .form-check-input:checked {
    background-color: #4caf50 !important;
    border-color: #0d6efd;
  }
  .form-check-input:focus {
    border-color: #4caf50 !important;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  .card-bottom {
    width: 500px;
    display: flex;
    justify-content: space-between;
  }

  .form-check-label {
    padding: 5px 15px;
    border-radius: 50px;
    :hover {
      background-color: rgba(76, 175, 80, 0.15);
    }
  }
  .form-check {
    display: flex;
    align-items: center;
  }
  .form-check a {
    margin-left: 10px;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    color: #4caf50;
    letter-spacing: 0.5px;
    font-weight: 700;
  }
  .register-information a {
    color: #2196f3;
    font-size: 16px;
    cursor: pointer;
  }
  .register-button {
    margin-top: 20px;
    width: 400px;
    height: 40px;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #023581;
    transition: 0.3s ease-in;
    background-color: #023581;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #023581;
    }
  }
  @media screen and (max-width: 1024px) {
    .card {
      width: 600px;
      margin-top: 20px;
      padding: 50px 50px 30px 50px;
    }
    .form-check-input {
      width: 1em;
      height: 1em;
    }
    .form-check-inline {
      display: flex;
      flex-direction: row;
      height: 20px;
      align-items: center;
    }
    .form-check-inline label {
      padding-left: 5px;
      font-size: 14px;
      color: #023581;
    }
    @media screen and (max-width: 768px) {
      .card {
        width: 500px;
        margin-top: 20px;
        padding: 50px 50px 30px 50px;
      }
      .form-floating {
        margin: 20px;
        width: 400px;
      }
      .form-check-inline label {
        padding-left: 5px;
        font-size: 12px;
        color: #023581;
      }
      .validate-password {
        width: 400px;
      }

      .register-button {
        margin-top: 20px;
        width: 250px;
      }
      .card-bottom {
        width: 400px;
      }
      .form-check a {
        font-size: 12px;
      }
      .register-information a {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 560px) {
    .card {
      width: 400px;
      margin-top: 20px;
      padding: 20px 20px 20px 20px;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .form-floating {
      margin: 20px;
      width: 300px;
    }
    .validate-password {
      width: 300px;
    }
    .card-bottom {
      width: 300px;
    }
  }
  @media screen and (max-width: 400px) {
    .card {
      width: 350px;
      margin-top: 20px;
      padding: 10px 10px 30px 10px;
    }
  }
`;

const Register = () => {
  return (
    <RegisterStyle>
      <div className="register">
        <div className="register-title">
          <div className="icon">
            <ArrowLeft />
          </div>
          <div className="text">
            Ishtirokchi/buyurtmachi sifatida tizimga kirish
          </div>
        </div>
        <div className="card">
          <form>
            <div className="form-check form-check-inline form-check-inline1">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Xaridor
              </label>
            </div>
            <div className="form-check form-check-inline form-check-inline2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                Buyurtmachi
              </label>
            </div>
            <div className="form-check form-check-inline form-check-inline3">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" for="inlineRadio3">
                Xaridor va Buyurtmachi
              </label>
            </div>
          </form>
          <div className="border-line"></div>
          <div className="form-floating ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Telefon yoki Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Parol</label>
          </div>
          <div className="validate-password">
            <div className="validate-password-step step1"></div>
            <div className="validate-password-step step2"></div>
            <div className="validate-password-step step3"></div>
            <div className="validate-password-step step4"></div>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Parolni Tasdiqlash</label>
          </div>
          <div className="card-bottom">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <a class="form-check-label" htmlFor="flexCheckIndeterminate">
                Shartlarga roziman
              </a>
            </div>
            <div className="register-information">
              <a> Ro`yxatdan qanday o`tiladi? </a>
            </div>
          </div>
        </div>
        <div className="register-button">Tasdiqlash</div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
