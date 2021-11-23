import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
const ArrowRight = styled(AiOutlineRight)`
  font-size: 20px;
  color: #023581;
`;

const AccordionStyle = styled.div`
  .aside {
    margin-top: 20px;
    width: 400px;
    background-color: #ebf3ff;
    transition: 0.3s;
    padding: 20px 15px 50px 15px;
    border-radius: 4px;
    margin-right: 20px;
    @media screen and (max-width: 1500px) {
      width: 300px;
    }
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 20px 15px 15px 15px;
    }
  }
  .sidebar {
    background-color: #ebf3ff !important;
  }
  .accordion {
    background-color: #ebf3ff !important;
  }
  .accordion-button:not(.collapsed) {
    box-shadow: none;
  }

  .accordion-body {
    padding: 0;
  }
  .accordion-item {
    background-color: #ebf3ff !important;
    border: none;
  }
  .accordion-collapse .collapse .show {
    border: none;
  }
  .accordion-button {
    background-color: #ebf3ff !important;
    font-size: 24px !important;

    color: inherit;
    transition: color 0.3s, background-color 0.3s;
  }
  .accordion-header {
    color: #023581;
    border: none;
    font-size: 20px !important;
    min-height: 48px;
    padding: 8px 16px;
  }

  a {
    cursor: pointer;
    color: #023581;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    &:hover {
      background-color: rgba(3, 58, 141, 0.2);
    }
    span {
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 760px) {
    .accordion-button {
      font-size: 16px !important;
    }
  }
`;

const Accordion = () => {
  return (
    <AccordionStyle>
      <div className="aside">
        <div className="sidebar">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Yordam
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div>
                    <a to="/participating">
                      <span>
                        <ArrowRight />
                      </span>
                      Ro‘yxatdan qanday o‘tiladi?
                    </a>
                    <a to="/deposite-adjunction">
                      <span>
                        <ArrowRight />
                      </span>
                      Shaxsiy hisob qanday to‘ldiriladi?
                    </a>
                    <a to="/refund-money">
                      <span>
                        <ArrowRight />
                      </span>
                      Shaxsiy hisobdan pul qanday qaytariladi?
                    </a>
                    <a to="/bit-lot">
                      <span>
                        <ArrowRight />
                      </span>
                      Lotga qanday ariza beriladi?
                    </a>
                    <a to="/participate-auction">
                      <span>
                        <ArrowRight />
                      </span>
                      Auksionda qanday ishtirok etiladi?
                    </a>
                    <a to="/check-winner-protocol">
                      <span>
                        <ArrowRight />
                      </span>
                      G‘oliblik bayonnomasi qanday tekshiriladi?
                    </a>
                    <a to="/find-login">
                      <span>
                        <ArrowRight />
                      </span>
                      Login qanday aniqlanadi?
                    </a>
                    <a to="/change-login">
                      <span>
                        <ArrowRight />
                      </span>
                      Login qanday o‘zgartiriladi?
                    </a>
                    <a to="change-password">
                      <span>
                        <ArrowRight />
                      </span>
                      Parol qanday tiklanadi?
                    </a>
                    <a to="/faq-page">
                      <span>
                        <ArrowRight />
                      </span>
                      Ko‘p beriladigan savollar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Auksion haqida
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div>
                    <a to="">
                      <span>
                        <ArrowRight />
                      </span>
                      Auksion faoliyati to‘g‘risida
                    </a>
                    <a to="">
                      <span>
                        <ArrowRight />
                      </span>
                      Savdo o‘tkazish qoidalari
                    </a>
                    <a to="">
                      <span>
                        <ArrowRight />
                      </span>
                      Me’yoriy-huquqiy hujjatlar
                    </a>
                    <a to="">
                      <span>
                        <ArrowRight />
                      </span>
                      Savdoda qatnashish ofertalari
                    </a>
                    <a to="">
                      <span>
                        <ArrowRight />
                      </span>
                      Maxfiylik siyosati
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionStyle>
  );
};

export default Accordion;
