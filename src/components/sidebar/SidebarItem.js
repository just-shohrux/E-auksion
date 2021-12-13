import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const ChevronDown = styled(FaChevronDown)`
  font-size: 24px;
  transition: transform 0.3s;
  font-weight: 100;
  color: #757575;
`;
const ChevronUp = styled(FaChevronUp)`
  font-size: 24px;
  transition: transform 0.3s;
  font-weight: 100;
  color: #757575;
`;
const ChevronRight = styled(FaChevronRight)`
  font-size: 22px;
  transition: transform 0.3s;
  font-weight: 100;
  color: #023581;
`;
const SidebarItemStyle = styled.div`
  .dropdown-menu {
    background-color: #fff;
    color: #023581;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #f1f1f1;
    }
    img {
      width: 50px;
    }
  }
  .dropdown-menu-active {
    background-color: #023581;
    color: #fff;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: relative;
    background-color: #fff;
    z-index: 1;
  }

  .dropdown-content a {
    width: 100%;
    height: 50px;
    color: black;
    text-decoration: none;
    display: block;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .dropdown-title p {
    font-size: 16px;
    color: #023581;
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .active {
    display: block;
  }
  @media screen and (max-width: 1120px) {
    .dropdown-menu {
      justify-content: space-between;
    }
  }
`;

const SidebarItem = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const openDropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  const options = ["one", "two", "three"];
  return (
    <SidebarItemStyle>
      <div class="dropdown" onClick={openDropdownHandler}>
        <a>
          <div
            className={
              !openDropdown
                ? "dropdown-menu"
                : "dropdown-menu dropdown-menu-active"
            }
          >
            <div className="image">
              <img src={props.image} />
            </div>
            <div className="title">{props.title}</div>
            <div className="arrow">
              {!openDropdown ? <ChevronDown /> : <ChevronUp />}
            </div>
          </div>
        </a>
        <div
          className={
            !openDropdown ? "dropdown-content" : "dropdown-content active "
          }
        >
          <a href="#">
            <div>
              <ChevronRight />
            </div>
            <div className="dropdown-title">
              <p>{props.title}</p>
            </div>
          </a>
          <a href="#">
            <div>
              <ChevronRight />
            </div>
            <div className="dropdown-title">
              <p>{props.title}</p>
            </div>
          </a>
          <a href="#">
            <div>
              <ChevronRight />
            </div>
            <div className="dropdown-title">
              <p>{props.title}</p>
            </div>
          </a>
        </div>
      </div>
    </SidebarItemStyle>
  );
};

export default SidebarItem;
