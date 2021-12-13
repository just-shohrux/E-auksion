import React from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaLaptop,
  FaRegHeart,
} from "react-icons/fa";
import { BsEyeglasses } from "react-icons/bs";
import { FiUserPlus, FiUser } from "react-icons/fi";
import styled, { css } from "styled-components";

import Languages from "../language/Languages";

const Clock = () => {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  return (
    <span>
      {hour}:{minute}:{second}
    </span>
  );
};
setInterval(Clock, 1000);
const CalendarIcon = styled(FaRegCalendarAlt)`
  font-size: 20px;
  color: #023581;
  margin-right: 5px;
  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }
`;
const ClockIcon = styled(FaRegClock)`
  font-size: 20px;
  color: #023581;
  margin-right: 5px;
  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }
`;
const LaptopIcon = styled(FaLaptop)`
  font-size: 20px;
  color: red;
  margin-right: 5px;
  @media screen and (max-width: 1300px) {
    font-size: 14px;
  }
`;
const GlassIcon = styled(BsEyeglasses)`
  color: #023581;
  font-size: 28px;
  margin-right: 5px;
  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
`;
const HeartIcon = styled(FaRegHeart)`
  font-size: 20px;
  color: #023581;
`;
const AddUserIcon = styled(FiUserPlus)`
  font-size: 20px;
  color: #023581;
  margin-right: 5px;
`;
const UserIcon = styled(FiUser)`
  font-size: 20px;
  color: #023581;
  margin-right: 5px;
`;

const TopbarStyle = styled.nav`
  .topbar {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    padding: 0 150px;
    z-index: 99;
    border-bottom: 1px solid rgba(3, 58, 141, 0.2);
    background-color: #fff;
  }

  .float-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .topbar-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: #023581;
      margin: 0 10px;
    }
  }
  .float-right {
    display: flex;
    justify-content: space-between;
    .topbar-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin: 0 10px;
    }
  }
  .float-right .topbar-item {
    border-radius: 4px;
    border: 1px solid #023581;
    color: #023581;
    padding: 0 10px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: rgba(3, 58, 141, 0.2);
    }
  }
  @media screen and (max-width: 1600px) {
    .topbar {
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 1300px) {
    .float-right .hidden {
      display: none;
    }
  }
  @media screen and (max-width: 1300px) {
    .topbar {
      padding: 0 10px;
    }
    .float-left span {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 760px) {
    .float-left .hidden {
      display: none;
    }
  }
  @media screen and (max-width: 460px) {
    .float-left .hide-phone {
      display: none;
    }
  }
`;

const Topbar = () => {
  return (
    <TopbarStyle>
      <div className="topbar">
        <div className="float-left">
          <div className="topbar-item hide-phone ">
            <CalendarIcon />
            <span> 22.11.2021 (GMT+5)</span>
          </div>
          <div className="topbar-item hide-phone ">
            <ClockIcon />
            <Clock />
          </div>
          <div className="topbar-item">
            <GlassIcon />
            <span className="hidden hide-phone ">Maxsus imkoniyatlar</span>
          </div>
          <div className="topbar-item">
            <LaptopIcon />
            <span className="hidden">Demo versiya</span>
          </div>
        </div>
        <div className="float-right">
          <div className="topbar-item topbar-btn hidden">
            <HeartIcon />
          </div>
          <div>
            <div className=" topbar-item  topbar-btn">
              <Languages />
            </div>
          </div>
          <div className="topbar-item topbar-btn  topbar-link-register  hidden">
            <a>
              <AddUserIcon />
              Ro'yxatdan o'tish
            </a>
          </div>
          <div className="topbar-item topbar-btn  topbar-link-login hidden">
            <span>
              <UserIcon />
            </span>
            <span>Kabinetga kirish</span>
          </div>
        </div>
      </div>
    </TopbarStyle>
  );
};

export default Topbar;
