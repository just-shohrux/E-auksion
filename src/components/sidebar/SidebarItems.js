import React from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import categories from "../../mock/category-content";
import { FaChevronRight } from "react-icons/fa";

const RightArrow = styled(FaChevronRight)`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.35);
  font-weight: 400;
`;

const SidebarItemStyle = styled.div`
  .accordion-item {
    border: none;
  }

  .accordion-body {
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-button:not(.collapsed) {
    box-shadow: none;
    color: #fff;
    background-color: #023581;
  }

  .accordion-button:not(.collapsed) .sidebar-item-title {
    color: #fff;
  }
  .sidebar-item-content {
    display: flex;
    align-items: center;
    color: #023581;
    font-weight: 700;
  }

  .sidebar-item-image {
    padding-right: 10px;
  }
  img {
    width: 40px;
  }
  .sidebar-sub-item {
    width: 100%;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #ebf3ff;
    }
  }
  .sidebar-sub-item-icon {
    padding: 10px 15px;
  }
  .sidebar-sub-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
const SidebarItem = categories.map((item) => {
  return (
    <SidebarItemStyle>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={item.id}>
          <Accordion.Header>
            <div className="sidebar-item-content">
              <div className="sidebar-item-image">
                <img src={item.image} />
              </div>
              <div className="sidebar-item-title">{item.title}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            {item.subMenu.map((subItem) => {
              return (
                <div className="sidebar-sub-item">
                  <div className="sidebar-sub-item-icon">
                    <RightArrow />
                  </div>
                  <div className="sidebar-sub-item-title">{subItem.title}</div>
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </SidebarItemStyle>
  );
});

const SidebarItems = () => {
  return <div>{SidebarItem}</div>;
};

export default SidebarItems;
