import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import searchLogo from "../../../assets/images/icons/lot-number-icon2.png";
import Container from "../../container";
import Section from "../../section/Section";

const SearchIcon = styled(FaSearch)`
  color: rgba(0, 0, 0, 0.54);
  font-size: 24px;
`;

const SearchStyle = styled.div`
  .search {
    padding: 35px 0;
  }
  .search-form {
    width: 1120px;
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 28px;
    display: flex;
    background: #fff;
    height: 56px;
    align-items: center;
    justify-content: space-between;

    img {
      width: 42px;
      height: 42px;
      margin: 0 10px;
    }
  }
  .search-form:focus {
    border: 1px solid red;
  }

  .focus {
    border: 1px solid red;
  }
  .search-form-input {
    display: flex;
  }
  .search-form-input input {
    width: 1000px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .search-form-button {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-right: 5px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ebf3ff;
    }
  }
  @media (max-width: 1220px) {
    .search-form {
      width: 1000px;
    }
    .search-form-input input {
      width: 800px;
    }
  }
  @media (max-width: 1024px) {
    .search {
      padding: 25px 0;
    }
    .search-form {
      width: 700px;
    }
    .search-form-input input {
      width: 550px;
    }
  }
  @media (max-width: 768px) {
    .search {
      padding: 10px 0;
    }
    .search-form {
      width: 320px;
    }
    .search-form-input input {
      width: 200px;
    }
  }
`;

const Search = () => {
  return (
    <Section secondary>
      <Container>
        <SearchStyle>
          <div className="search">
            <div className="search-form">
              <div className="search-form-input">
                <img src={searchLogo} />
                <input placeholder="Lot raqami yoki mol-mulk nomi"></input>
              </div>
              <div className="search-form-button">
                <SearchIcon />
              </div>
            </div>
          </div>
        </SearchStyle>
      </Container>
    </Section>
  );
};

export default Search;
