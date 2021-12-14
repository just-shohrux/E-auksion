import React, { useState } from "react";
import styled from "styled-components";
import {
  IoIosKey,
  IoIosInformationCircleOutline,
  IoIosRepeat,
} from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const KeyIcon = styled(IoIosKey)`
  font-size: 22px;
  color: #023581;
  margin-right: 10px;
`;
const InformationIcon = styled(IoIosInformationCircleOutline)`
  font-size: 22px;
  color: #023581;
  margin-right: 10px;
`;
const ChangeIcon = styled(IoIosRepeat)`
  font-size: 22px;
  color: #023581;
  margin-right: 10px;
`;

const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  .login {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
  .login-title {
    margin-left: 30px;
    margin-right: 30px;
    padding-bottom: 10px;
    color: #023581;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    border-bottom: 4px solid #e9ac1c;
    width: 600px;
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
  }

  .login-recovery p {
    font-size: 14px;
    color: #023581;
    cursor: pointer;
  }

  .login-button {
    width: 300px;
    display: flex;
    justify-content: center;
    color: #ffffff;
    background-color: #023581;
    line-height: 36px;
    border: 1px solid #023581;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease-in;
    &:hover {
      background-color: #fff;
      color: #023581;
    }
  }
  .form-floating {
    margin: 20px;
    width: 500px;
  }
  .login-recovery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
  }
  .login-recovery-buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: #023581;
    }
  }

  .recovery-button {
    width: 400px;
    display: flex;
    justify-content: center;
    height: 36px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #023581;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.4s ease-in;
    margin: 10px 0;
    &:hover {
      background-color: rgba(3, 58, 141, 0.2);
    }
  }
  .expand-enter {
    max-height: 0;
    opacity: 0;
  }

  .expand-enter-active {
    max-height: 100px;
    opacity: 1;
    transition: all 500ms;
  }

  .expand-exit {
    max-height: 100px;
    opacity: 1;
  }

  .expand-exit-active {
    max-height: 0;
    opacity: 0;
    transition: all 500ms;
  }
  .line-with-text {
    width: 700px;
    text-align: center;
    margin: 40px 0 0 0;
    position: relative;

    p {
      width: 100%;
      text-align: center;
      border-top: 1px solid rgba(0, 0, 0, 0.22);
      line-height: 1px;
    }

    p span {
      background: #fff;
      color: #023581;
      padding: 5px 10px;
      font-size: 15px;
      letter-spacing: 0.5px;
    }
  }
  .register-button {
    margin-top: 20px;
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #023581;
    background-color: #fff;
    transition: 0.3s ease-in;
    a {
      text-decoration: none;
      font-weight: 700;
      color: #023581;
    }
    &:hover {
      background-color: #023581;
      color: #fff;
      a {
        color: #fff;
      }
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
    .form-floating {
      margin: 20px;
      width: 400px;
    }

    .register-button {
      margin-top: 20px;
      width: 250px;
    }
    .recovery-button {
      width: 350px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 560px) {
    .card {
      width: 400px;
      margin-top: 20px;
      padding: 20px 20px 20px 20px;
    }
    .form-floating {
      margin: 20px;
      width: 300px;
    }
    .login-recovery {
      width: 200px;
    }
    .line-with-text {
      width: 400px;
    }
    .recovery-button {
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
  .line-with-text {
    width: 300px;
  }
`;

const Login = () => {
  const [expanded, setExpanded] = useState(false);

  const expandingHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <LoginStyle>
      <div className="login">
        <div className="login-title">
          Ishtirokchi/buyurtmachi sifatida tizimga kirish
        </div>
        <div className="card">
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
          <div className="login-recovery">
            <p onClick={expandingHandler}>
              Login (telefon yoki e-mail) yoki parolni unutdingizmi?
            </p>
            <div>
              <CSSTransition
                in={expanded}
                timeout={500}
                classNames="expand"
                unmountOnExit
                onEnter={() => expandingHandler}
                onExited={() => expandingHandler}
              >
                <div className="login-recovery-buttons">
                  <li>
                    <a to="/recovery-page" className="recovery-button">
                      <span>
                        <KeyIcon />
                      </span>
                      Parolni tiklash
                    </a>
                  </li>
                  <li>
                    <a to="/verify-login-page" className="recovery-button">
                      <span>
                        <InformationIcon />
                      </span>
                      Login (telefon yoki e-mail)ni aniqlash
                    </a>
                  </li>
                  <li>
                    <a to="change-login" className="recovery-button">
                      <span>
                        <ChangeIcon />
                      </span>
                      Login (telefon, e-mail)ni o‘zgartirish
                    </a>
                  </li>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="login-button">Kirish</div>
        </div>
        <div className="line-with-text">
          <p>
            <span>Yangi foydalanuvchimisiz?</span>
          </p>
        </div>
        <div className="register-button">
          <a to="/register-page">Ro'yxatdan o'tish</a>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
