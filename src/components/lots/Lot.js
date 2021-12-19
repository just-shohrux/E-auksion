import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import lotNumber from "../../assets/images/icons/lot-number-icon.png";
import styled from "styled-components";

const HeartIcon = styled(AiOutlineHeart)`
  color: #023581;
  font-size: 24px;
`;
const LotStyle = styled.div`
  .lot-card {
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 2px rgb(64 74 139 / 16%);
    border: 1px solid #fff;
    padding: 10px;
    &:hover {
      background-color: #fffaee;
      border-color: #e9ac1c;
    }
  }
  .lot-card-image {
    display: flex;
    height: 255px;
    width: 350px;
    position: relative;
  }
  .number-lot img {
    padding-right: 5px;
  }
  .number-lot {
    display: flex;
    position: absolute;
    padding: 9px 15px;
    border-radius: 2px;
    font-size: 16px;
    top: 12px;
    left: 8px;
    background-color: #fff;
    color: #023581;
  }
  .favourite-lot {
    display: flex;
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 4px;
    padding: 4px;
    background-color: #fff;
    cursor: pointer;
  }
  .lot-card-information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 14px;
      letter-spacing: 0.5px;
      color: #303031;
      line-height: 1.2;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #023581;
    }
  }
  .lot-card-information-row {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 800px;
  }
  .lot-prices {
    display: flex;
  }
  .lot-prices > div:last-child {
    margin-left: 60px;
  }
  .lot-address {
    width: 600px;
  }
  .lot-links {
    width: 220px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      outline: none;
      border: none;
      padding: 10px 15px;
      color: #fff;
      background-color: #023581;
      font-weight: 600;
      font-size: 14px;
      border-radius: 4px;
      transition: 0.2s;
      &:hover {
        background-color: rgba(2, 53, 129, 0.8);
      }
    }
  }
  @media screen and (max-width: 1880px) {
    .lot-card-information-row {
      width: 700px;
    }
    .lot-address {
      width: 500px;
    }
    .lot-buttons {
      width: 200px;
    }
  }
  @media screen and (max-width: 1600px) {
    .lot-card-information-row {
      width: 900px;
    }
    .lot-address {
      width: 600px;
    }
    .lot-links {
      width: 220px;
    }
  }
  @media screen and (max-width: 1540px) {
    .lot-card-information-row {
      width: 700px;
    }
    .lot-address {
      width: 500px;
    }
    .lot-links {
      width: 200px;
    }
  }
  @media screen and (max-width: 1300px) {
    .lot-card {
      display: flex;
      flex-direction: column;
      width: 430px;
      align-items: center;
    }
    .lot-card-image {
      display: flex;
      height: 200px;
      width: 400px;
    }
    .lot-card-information-row {
      flex-direction: column;
      width: 400px;
    }
    .lot-dates {
      display: flex;
      flex-direction: column;
    }

    .lot-address {
      width: 400px;
    }
    .lot-links {
      width: 400px;
    }
  }
  @media screen and (max-width: 540px) {
    .lot-card {
      display: flex;
      flex-direction: column;
      width: 330px;
      align-items: center;
    }
    .lot-card-image {
      display: flex;
      height: 200px;
      width: 300px;
    }
    .lot-card-information-row {
      flex-direction: column;
      width: 300px;
    }
    .lot-dates {
      display: flex;
      flex-direction: column;
    }

    .lot-address {
      width: 300px;
    }
    .lot-links {
      width: 300px;
    }
  }
  .lot-prices {
    flex-direction: column;
  }
  .lot-prices > div:last-child {
    margin-left: 0;
  }
  .lot-card {
    margin: 5px;
  }
`;
const Lot = (props) => {
  return (
    <LotStyle>
      <div className="lot-card">
        <div
          className="lot-card-image"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="number-lot">
            <img src={lotNumber} />
            <span>{props.number}</span>
          </div>
          <div className="favourite-lot">
            <HeartIcon />
          </div>
        </div>
        <div className="lot-card-information">
          <div className="lot-card-information-row">
            <div className="lot-card-information-col">
              <div>
                <span>Mol-mulk nomi:</span>
                <p>“Чорвоқ оромгоҳи” дам олиш маскани</p>
              </div>
              <div className="lot-prices">
                <div>
                  <span>Boshlang‘ich narxi:</span>
                  <p>22 291 200.00 UZS</p>
                </div>
                <div>
                  <span>Zakalad puli miqdori (20%) :</span>
                  <p>22 291 200.00 UZS</p>
                </div>
              </div>
            </div>
            <div className="lot-card-information-col">
              <div className="lot-dates">
                <div>
                  <span>Savdo vaqti:</span>
                  <p>03.01.2022 09:00</p>
                </div>
                <div>
                  <span>Ariza qabul qilish oxirgi muddati:</span>
                  <p>03.01.2022 09:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lot-card-information-row">
            <div className="lot-card-information-col">
              <div className="lot-address">
                <span>Manzil:</span>
                <p>
                  Qoraqalpog`iston Respublikasi, Ellikqal'a tumani, «Qilchinoq»
                  OFY
                </p>
              </div>
            </div>
            <div className="lot-card-information-col">
              <div className="lot-links">
                <NavLink to="/lot-detail">Batafsil</NavLink>
                <NavLink to="/lot-detail"> Ariza berish</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LotStyle>
  );
};

export default Lot;
