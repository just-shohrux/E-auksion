import React, { useState } from "react";
import styled from "styled-components";
import flagUz from "../../assets/images/uz-flag.png";
import flagRus from "../../assets/images/ru-flag.png";
import flagEng from "../../assets/images/en.png";
const LanguagesStyle = styled.div`
  img {
    width: 22px;
    height: 16px;
    margin-right: 5px;
  }
  .language-dropdown-btn {
    display: flex;
    height: 32px;
    align-items: center;
    color: #023581;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  .language-dropdown-content {
    position: fixed;
    z-index: 99;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
      0 3px 1px -2px rgb(0 0 0 / 12%);
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    justify-content: start;
    @media screen and (max-width: 1300px) {
      right: 20px;
    }
  }
  .language-dropdown-item {
    display: flex;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    padding: 10px;
    &:hover {
      background-color: rgba(3, 58, 141, 0.2);
    }
  }
`;

const Languages = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [isImage, setIsImage] = useState();

  const languages = [
    {
      langCode: "O'Z",
      image: flagUz,
      lang: "O'zbekcha",
    },
    {
      langCode: "ЎЗ",
      image: flagUz,
      lang: "Ўзбекча",
    },
    {
      langCode: "RU",
      image: flagRus,
      lang: "Русский",
    },

    {
      langCode: "EN",
      image: flagEng,
      lang: "English",
    },
  ];

  return (
    <LanguagesStyle>
      <div className="language-dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {!isImage ? (
            <div className="language-dropdown-btn">
              <img src={flagUz} />
              <span>O'Z</span>
            </div>
          ) : (
            <div className="language-dropdown-btn">
              <img src={isImage} />
              <span>{isSelected}</span>
            </div>
          )}
        </div>
        {isActive && (
          <div className="language-dropdown-content">
            {languages.map((language) => (
              <div
                onClick={(e) => {
                  setIsSelected(language.langCode);
                  setIsImage(language.image);
                  setIsActive(false);
                }}
                className="language-dropdown-item"
              >
                <img src={language.image} />
                <span>{language.lang}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </LanguagesStyle>
  );
};

export default Languages;
