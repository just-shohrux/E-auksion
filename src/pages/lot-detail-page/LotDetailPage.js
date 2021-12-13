import React, { useState } from "react";
import styled from "styled-components";
import Slider from "../../components/slider/Slider";
import dateImage1 from "../../assets/images/icons/end_auction_date.png";
import dateImage2 from "../../assets/images/icons/application_date_icon.png";
import priceImage1 from "../../assets/images/icons/baholangan_narx_icon.png";
import priceImage2 from "../../assets/images/icons/zakalad_icon.png";
import typeImage1 from "../../assets/images/icons/type_auction.png";
import typeImage2 from "../../assets/images/icons/sort_auction_icon.png";
import contractImage from "../../assets/images/icons/contract.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  AiOutlineOrderedList,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import CountDownTimer from "../../components/time-counter";

const UserIcon = styled(AiOutlineUser)`
  font-size: 26px;
  color: #023581;
`;

const EyeIcon = styled(AiOutlineEye)`
  font-size: 26px;
  color: #023581;
`;
const HeartIcon = styled(AiOutlineHeart)`
  font-size: 26px;
  color: #023581;
  cursor: pointer;
`;
const FillHeartIcon = styled(AiFillHeart)`
  font-size: 26px;
  cursor: pointer;
  color: #023581;
`;

const ListFormat = styled(AiOutlineOrderedList)`
  font-size: 30px;
  color: #023581;
`;
const LocationIcon = styled(MdOutlineLocationOn)`
  font-size: 30px;
  color: #023581;
`;
const AuctionType = styled(BsFillArrowUpCircleFill)`
  font-size: 22px;
  color: red;
`;

const LotDetailPageStyle = styled.div`
  padding: 0 150px 0 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1800px) {
    padding: 0 100px 0 100px;
  }
  @media screen and (max-width: 1620px) {
    padding: 0 50px 0 50px;
  }
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    padding: 0 10px 0 10px;
  }
  main {
    border: 1px solid red;
    padding: 20px 0 20px 20px;
    border: 1px solid rgba(3, 58, 141, 0.2);
    border-radius: 5px;
    color: #023581;
    display: flex;
    width: 1100px;
  }
  aside {
    display: flex;
    width: 400px;
    flex-direction: column;
  }

  .lot-information {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    img {
      width: 30px;
    }
  }

  .lot-information-dates {
    display: flex;
  }
  .lot-title h3 {
    float: left;
    width: calc(100% - 180px);
    font-size: 20px;
    line-height: 1.3;
    font-weight: bold;
  }
  .lot-number {
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    .number {
      background-color: #023581;
      color: #ffffff;
      font-size: 22px;
      font-weight: bold;
      padding: 5px 15px 5px 15px;
      border-radius: 20px 0 0 20px;
      margin-left: 10px;
    }
  }
  .lot-information-row {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    p {
      font-size: 18px;
      font-weight: bold;
      margin-top: 3px;
      padding-right: 10px;
    }
  }
  .lot-date,
  .lot-price,
  .lot-type {
    width: 45%;
  }
  .lot-date > div {
    display: flex;
    align-items: center;
  }
  .lot-date span {
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 0;
    padding-right: 10px;
    width: calc(100% - 40px);
    vertical-align: middle;
    line-height: normal;
    letter-spacing: 0.5px;
  }
  .green-text {
    color: #388e3c;
  }
  .lot-bottom {
    float: right;
    display: flex;
    justify-content: end;
    align-items: center;
    span {
      padding-right: 12px;
    }
  }
  .side-container {
    margin-top: 50px;
    width: 450px;
    background: #ebf3ff;
    margin-bottom: 60px;
    height: 230px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .side-container-content {
    position: absolute;
    top: -50px;
    width: 380px;
    background-color: #ffffff;
    padding: 15px 15px 15px 25px;
    border: 1px solid rgba(3, 58, 141, 0.2);
    border-radius: 5px;
    label {
      font-size: 16px;
      padding: 15px 0;
      color: #023581;
    }
  }
  .side-container-heading h3 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1.2;
    color: #023581;
  }
  .heading-border {
    height: 4px;
    width: 100px;
    margin-top: 2px;
    background-color: #e9ac1c;
  }

  .side-container-bottom {
    display: flex;
    justify-content: space-between;
  }
  .side-container-bottom-btn {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 10px;
    }
    button {
      width: 200px;
      color: #ffffff;
      background-color: #023581;
      line-height: 36px;
      border: 1px solid #023581;
      font-weight: 600;
      &:hover {
        color: #023581;
        background-color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 1800px) {
    aside {
      width: 350px;
    }
    .side-container {
      width: 400px;
      height: 200px;
    }
    .side-container-content {
      width: 320px;
    }
  }
  @media screen and (max-width: 1620px) {
    .side-container {
      width: 350px;
    }
  }
  @media screen and (max-width: 1400px) {
    aside {
      align-items: center;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .side-container {
      width: 80%;
      height: 200px;
    }
    .side-container-content {
      width: 80%;
    }
  }
  @media screen and (max-width: 1100px) {
    main {
      flex-direction: column;
      width: 900px;
      padding: 10px 0;
    }
    .lot-image {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 1024px) {
    main {
      flex-direction: column;
      width: 700px;
    }
    .lot-image {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 768px) {
    main {
      flex-direction: column;
      width: 530px;
    }
    .lot-image {
      display: flex;
      justify-content: center;
    }
    .side-container {
      width: 95%;
      height: 200px;
    }
    .side-container-content {
      width: 100%;
    }
  }
  @media screen and (max-width: 560px) {
    main {
      width: 350px;
    }
  }
`;

const LotDetailPage = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [count, setCount] = useState(10);

  const favouriteHandler = (e) => {
    setIsFavourite(!isFavourite);
    setCount(!isFavourite ? count - 1 : count + 1);
  };
  return (
    <LotDetailPageStyle>
      <main>
        <div className="lot-image">
          <Slider />
        </div>
        <div className="lot-information">
          <div className="lot-name-number">
            <div className="lot-title">
              <h3>
                Собиқ "Марказ улгуржи савдо инвест" МЧЖнинг маъмурий ва
                омборхона бино-иншоотлари
              </h3>
            </div>
            <div className="lot-number">
              Lot №<span className="number">0849296</span>
            </div>
          </div>
          <div className="lot-information-row">
            <div className="lot-date">
              <div>
                <img src={dateImage2} />
                <span>Ariza qabul qilish oxirgi muddati:</span>
              </div>
              <p>25.12.2021 13:00</p>
            </div>
            <div className="lot-date">
              <div>
                <img src={dateImage1} />
                <span>Savdo boshlanish vaqti:</span>
              </div>
              <p>25.12.2021 13:00</p>
            </div>
          </div>
          <div className="lot-information-row">
            <div className="lot-price">
              <div>
                <img src={priceImage1} />
                <span>Boshlang‘ich narxi:</span>
              </div>
              <p>25.12.2021 13:00</p>
            </div>
            <div className="lot-date">
              <div>
                <img src={priceImage2} />
                <span>Zakalad puli miqdori(5%):</span>
              </div>
              <p>4 650 000.00 UZS</p>
            </div>
          </div>

          <div className="lot-information-row">
            <div className="lot-type">
              <div>
                <img src={typeImage1} />
                <span>Savdo o‘tkazish turi:</span>
              </div>
              <p>Auksion</p>
            </div>
            <div className="lot-type">
              <div>
                <img src={typeImage2} />
                <span> Savdo o‘tkazish uslubi:</span>
              </div>
              <p>
                <AuctionType /> Narxni oshirib borish
              </p>
            </div>
          </div>
          <div className="lot-information-row">
            <div className="lot-type">
              <div>
                <ListFormat />
                <span>Birinchi qadam bahosi(5%):</span>
              </div>
              <p>4 650 000.00 UZS</p>
            </div>
          </div>
          <div className="lot-information-row">
            <div className="lot-address">
              <div>
                <LocationIcon />
                <span>Manzil:</span>
              </div>
              <p>Namangan viloyati, Namangan tumani, Kelajak kochasi 3-uy</p>
            </div>
          </div>
          <div className="lot-information-row">
            <div className="lot-address">
              <div>
                <LocationIcon />
                <span>Lot holati:</span>
              </div>
              <p className="green-text">
                Auksionda ishtirok etish uchun elektron arizalarni qabul qilish
              </p>
            </div>
          </div>
          <div className="lot-information-row lot-bottom ">
            <div>
              <UserIcon />
              <span>0</span>
            </div>
            <div>
              <EyeIcon />
              <span>1110</span>
            </div>
            <div>
              {isFavourite ? (
                <HeartIcon onClick={favouriteHandler} />
              ) : (
                <FillHeartIcon onClick={favouriteHandler} />
              )}
              <span>{count}</span>
            </div>
          </div>
        </div>
      </main>
      <aside>
        <div className="side-container">
          <div className="side-container-content">
            <div className="side-container-heading">
              <h3>Arizalar qabul qilishning yakunlanishiga</h3>
            </div>
            <div className="heading-border"></div>
            <CountDownTimer countdownTimestampMs={16284548} />
          </div>
        </div>
        <div className="side-container">
          <div className="side-container-content">
            <div className="side-container-heading">
              <h3>Ishtirok etish uchun</h3>
            </div>
            <div className="heading-border"></div>
            <label>
              Hurmatli foydalanuvchi, ariza berish uchun ro‘yxatdan o‘tgan
              bo‘lishingiz lozim!
            </label>
            <div className="side-container-bottom">
              <div className="side-container-bottom-btn">
                <button>Ariza berish</button>
                <a href="#">Lotga qanday ariza beriladi?</a>
              </div>
              <div className="contract-img">
                <img src={contractImage} />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </LotDetailPageStyle>
  );
};

export default LotDetailPage;
