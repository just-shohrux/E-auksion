import React from "react";
import styled from "styled-components";
import categories from "../../mock/category-content";
import SidebarItem from "./SidebarItem";
import allCategory from "../../assets/images/all-group.png";

const SidebarItemListStyle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);

  .dropdown-menu {
    width: 100%;
    background-color: #fff;
    color: #023581;
    padding: 16px 20px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #f1f1f1;
    }
    img {
      width: 50px;
    }
  }

  @media screen and (max-width: 1600px) {
    .dropdown-menu {
      width: 300px;
    }
  }
  @media screen and (max-width: 1120px) {
    .dropdown-menu {
      width: 100%;
    }
  }
  .title {
    width: 100%;
  }
`;

const SidebarItemList = (props) => {
  return (
    <SidebarItemListStyle>
      <a>
        <div className="dropdown-menu">
          <div className="image">
            <img src={allCategory} />
          </div>
          <div className="title">Barchasi</div>
        </div>
      </a>
      {categories.map((categories) => (
        <SidebarItem
          title={categories.title}
          image={categories.image}
          options={categories.option}
        />
      ))}
    </SidebarItemListStyle>
  );
};

export default SidebarItemList;
