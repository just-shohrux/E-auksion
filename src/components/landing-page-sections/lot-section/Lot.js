import React from "react";
import styled from "styled-components";
import Card from "../../card/Card";
import { AiOutlineHeart } from "react-icons/ai";
import lotNumber from "../../../assets/images/icons/lot-number-icon.png";
import lotPrice from "../../../assets/images/icons/lot-pricing-icon.png";
import calendarIcon from "../../../assets/images/icons/end_auction_date.png";

const HeartIcon = styled(AiOutlineHeart)`
  color: #023581;
  font-size: 24px;
`;

const LotStyle = styled.div`
  .lot-img {
    display: flex;
    height: 240px;
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
  .lot-price {
    button {
      cursor: pointer;
      padding: 4px 0;
      width: 100%;
      background-color: #023581;
      border-radius: 4px;
      border: none;
    }
    &:hover {
      transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
        opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
  }
  .lot-date {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .lot-date-image {
      margin-top: 3px;
      float: left;
      padding: 5px;
      border-radius: 4px;
      box-shadow: 0px 0px 3px -1px rgb(0 0 0 / 75%);
    }
    img {
      width: 27px;
    }
  }
  .lot-title {
    display: flex;
    margin: 8px 0;
    height: 55px;
    max-width: 350px;
    p {
      text-align: start;
      color: #023581;
      line-height: 1.2;
      font-size: 17px;
    }
  }

  .lot-date-information {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    text-align: justify;
  }
  .lot-date-information-title span {
    font-size: 14px;
    color: #023581;
  }
  .lot-date-information-time span {
    color: #023581;
    font-size: 18px;
    font-weight: bold;
  }
  .lot-information {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      font-size: 17px;
      padding: 7px 16px;
      color: #023581;
      border-radius: 4px;
      &:hover {
        background: rgba(218, 216, 217, 0.56);
      }
    }
  }
  @media (max-width: 768px) {
    .lot-img {
      width: 250px;
      height: 180px;
    }
    .lot-title {
      max-width: 250px;
    }
  }
`;

const Lot = (props) => {
  return (
    <LotStyle>
      <Card>
        <div className="lot-card">
          <div
            className="lot-img"
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
          <div className="lot-title">
            <p>{props.title}</p>
          </div>
          <div className="lot-price">
            <button>
              <img src={lotPrice} />
            </button>
          </div>
          <div className="lot-date">
            <div className="lot-date-image">
              <img src={calendarIcon} />
            </div>
            <div className="lot-date-information">
              <div className="lot-date-information-title">
                <span>Savdo vaqti:</span>
              </div>
              <div className="lot-date-information-time">
                <span>15.11.2021 09:00</span>
              </div>
            </div>
          </div>
          <div className="lot-information">
            <a href="#">Ariza berish</a>
            <a href="#">Batafsil</a>
          </div>
        </div>
      </Card>
    </LotStyle>
  );
};

export default Lot;
