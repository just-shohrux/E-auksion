import React from "react";
import styled from "styled-components";
import { Accordion } from "react-bootstrap";
import help_about from "../../mock/help-about-content";
import { FaChevronRight } from "react-icons/fa";

const RightArrow = styled(FaChevronRight)`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.35);
  font-weight: 400;
`;

const AccordionItemStyle = styled.div`
  .accordion {
    background-color: #ebf3ff;
  }

  .accordion-item {
    border: none;
    background-color: #ebf3ff;
  }

  .accordion-body {
    background-color: #ebf3ff;
    padding: 0;
  }
  .accordion-button:focus {
    box-shadow: none;
  }
  .accordion-button {
    background-color: #ebf3ff;
  }
  .accordion-button:not(.collapsed) {
    box-shadow: none;
    background-color: #ebf3ff;
  }

  .sidebar-item-content {
    display: flex;
    align-items: center;
    color: #023581;
    font-weight: 700;
  }

  .sidebar-sub-item {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .sidebar-sub-item-icon {
    padding: 10px 15px;
  }
  .sidebar-sub-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    background-color: #ebf3ff;
  }
`;

const AccordionItem = help_about.map((item) => {
  return (
    <AccordionItemStyle>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={item.id}>
          <Accordion.Header>
            <div className="sidebar-item-content">
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
    </AccordionItemStyle>
  );
});

const AccordionItems = () => {
  return <div>{AccordionItem}</div>;
};

export default AccordionItems;
