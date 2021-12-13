import React from "react";
import styled from "styled-components";
import { FaRegUser, FaCheck, FaSearch } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
const UserIcon = styled(FaRegUser)`
  color: #fff;
`;
const PasswordIcon = styled(RiLockPasswordLine)`
  color: #fff;
`;
const CheckIcon = styled(FaCheck)`
  color: #fff;
`;
const SearchIcon = styled(FaSearch)`
  color: #fff;
`;

const ArrowLeft = styled(AiOutlineArrowLeft)`
  font-size: 40px;
  color: #023581;
`;

const RecoveryPageStyle = styled.div`
  padding-top: 114px;
  display: flex;
  justify-content: center;
  .recovery {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .recovery-title {
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
  .recovery-step-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .recovery-step {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .recovery-step div {
    height: 30px;
    width: 30px;
    background-color: #9e9e9e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recovery-step-active div {
    background-color: #1976d2;
  }
  .recovery-step-active label {
    color: #1976d2 !important;
  }

  .recovery-step label {
    font-size: 14px;
    line-height: 18px;
    color: #9e9e9e;
    letter-spacing: 0.1px;
    display: flex;
    flex-direction: row;
  }
  .border {
    width: 100%;
    margin: 20px 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
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
      font-size: 14px;
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
    .recovery-step {
      flex-wrap: wrap;
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
    .recovery-step label {
      display: none;
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

const RecoveryPage = () => {
  return (
    <RecoveryPageStyle>
      <div className="recovery">
        <div className="recovery-title">
          <div className="icon">
            <ArrowLeft />
          </div>
          <div className="text">Parolni tiklash</div>
        </div>
        <div className="card">
          <div className="recovery-step-list">
            <div className="recovery-step  recovery-step-active ">
              <div>
                <UserIcon />
              </div>
              <label>Foydalanuvchini aniqlash</label>
            </div>
            <div className="  recovery-step">
              <div>
                <PasswordIcon />
              </div>
              <label>Parolni tiklash usuli</label>
            </div>
            <div className="recovery-step">
              <div>
                <CheckIcon />
              </div>
              <label>Yakunlash</label>
            </div>
          </div>
          <div className="border"></div>
          <div className="note">
            <p>
              <strong>Eslatma:</strong>Parolni tiklash usullarini tanlash uchun
              tizimda foydalaniladigan telefon raqam yoki E-mail ni kiriting!
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
              <label htmlFor="floatingPassword">Parol</label>
            </div>
            <div className="search-button">
              <span>Izlash</span>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </RecoveryPageStyle>
  );
};

export default RecoveryPage;
