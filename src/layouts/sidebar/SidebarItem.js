import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import { FaChevronRight } from "react-icons/fa";

import cardImage1 from "../../assets/images/card-img1.png";
import cardImage2 from "../../assets/images/card-img2.png";
import cardImage3 from "../../assets/images/card-img3.png";
import cardImage4 from "../../assets/images/card-img4.png";
import cardImage5 from "../../assets/images/card-img5.png";
import cardImage6 from "../../assets/images/card-img6.png";
import cardImage7 from "../../assets/images/card-img7.png";
import cardImage8 from "../../assets/images/card-img8.png";

const RightArrow = styled(FaChevronRight)`
  font-size: 16px;
  color: #023581;
`;

const SidebarItemStyle = styled.div`
  .accordion-item {
    border: none;
  }
  .accordion-button {
    padding: 5px 16px;
    color: #023581;
    font-size: 16px;
    font-weight: 600;
    border: none;
  }

  .accordion-button:not(.collapsed) {
    color: #fff;
    background-color: #023581;
    box-shadow: none;
  }
  .accordion-item:first-of-type .accordion-button {
    border-radius: 0;
  }
  .accordion-button:not(.collapsed)::after {
    color: #fff;
  }
  .accordion-button:focus {
    border: none;
    box-shadow: none;
  }

  .accordion-header img {
    width: 50px;
  }
  .accordion-body {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .accordion-body a {
    cursor: pointer;
    padding: 10px 0 10px 10px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    &:hover {
      background-color: #ebf3ff;
    }
  }
  .right-arrow {
    padding-left: 16px;
  }
  .accordion-content {
    padding-left: 16px;
    font-size: 16px;
    color: #023581;
  }
`;

const SidebarItem = (props) => {
  return (
    <SidebarItemStyle>
      <Accordion>
        <Accordion.Item eventKey={props.id}>
          <Accordion.Header>
            <img src={props.image} />
            {props.title}
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Bo`sh binolar</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Davlat ulushi</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                “Ўзбекэнерго” АЖ маъмурий биноси
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                "Avtogazta'minot" MCHJ ga qarashli davlat aktivlari
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Chorvoq oromgohi</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Yirik davlat aktivlari</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Тўйтепа металл Қурилмалари” АЖ
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img src={cardImage1} />
            Davlat aktivlari
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Bo`sh binolar</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Davlat ulushi</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                “Ўзбекэнерго” АЖ маъмурий биноси
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                "Avtogazta'minot" MCHJ ga qarashli davlat aktivlari
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Chorvoq oromgohi</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Yirik davlat aktivlari</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Тўйтепа металл Қурилмалари” АЖ
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img src={cardImage2} />
            Davlat mulkini ijaraga berish
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Davlat mulkini ijaraga berish
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Буюртмачилар мулкини ижарага бериш
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <img src={cardImage3} />
            Ko`chmas mulk
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Ko`p qavatli turar-joylar</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Turar-joy uchastkasi (hovli)
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Noturar-joy obyektlari</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Qurilishi tugallanmagan ko`p qavatli turar-joylar
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Qurilishi tugallanmagan turarjoy uchastkalari
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Qurilishi tugallanmagan binolar
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Bo`sh yerlar</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Boshqa turdagi ko'chmas mulklar
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Bo`sh binolar</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">Davlat ob`yekti</div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                “Ўзбекэнерго” АЖ маъмурий биноси
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Буюртмачиларнинг бўш бинолари
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                "Avtogazta'minot" MCHJ ga qarashli davlat aktivlari
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <img src={cardImage4} />
            Avtomototransport
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Davlat mulkini ijaraga berish
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Буюртмачилар мулкини ижарага бериш
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <img src={cardImage4} />
            Avtomototransport
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Davlat mulkini ijaraga berish
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Буюртмачилар мулкини ижарага бериш
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <img src={cardImage4} />
            Avtomototransport
          </Accordion.Header>
          <Accordion.Body>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Davlat mulkini ijaraga berish
              </div>
            </a>
            <a>
              <div className="right-arrow">
                <RightArrow />
              </div>
              <div className="accordion-content">
                Буюртмачилар мулкини ижарага бериш
              </div>
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}
    </SidebarItemStyle>
  );
};

export default SidebarItem;
