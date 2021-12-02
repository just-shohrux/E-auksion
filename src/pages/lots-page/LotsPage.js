import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import { FaTrashAlt } from "react-icons/fa";
import LotList from "../../layouts/lots/LotList";
import Sidebar from "../../layouts/sidebar/Sidebar";

const TrashIcon = styled(FaTrashAlt)`
  font-size: 25px;
  color: #fff;
`;

const LotsPageStyle = styled.div`
  padding: 0 150px 0 150px;
  display: flex;

  main {
    margin-left: 15px;
    background-color: #ebf3ff;
    padding: 20px;
  }
  .search {
    width: 100%;
    padding: 10px;
  }
  .search-form {
    display: flex;
    justify-content: space-between;
    input,
    select {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.24);
    }
    .search-form-buttons {
      display: flex;
      justify-content: space-between;
      button:first-child {
        width: 250px;
        height: 40px;
        color: #fff;
        background-color: #023581;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s ease-in;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        margin-right: 20px;
        &:hover {
          background-color: rgba(3, 58, 141, 0.8);
        }
      }
      button:last-child {
        width: 50px;
        height: 40px;
        color: #fff;
        background-color: #023581;
        cursor: pointer;
        font-weight: 700;
        transition: 0.3s ease-in;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        &:hover {
          background-color: rgba(3, 58, 141, 0.8);
        }
      }
    }
  }
  .pagination {
    justify-content: center;
    padding: 30px;
  }
  .pagination button {
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 20px;
  }
  .pagination button {
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 20px;
    color: #023581;
  }
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: #023581;
    color: #fff;
  }
  .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 1880px) {
    padding: 134px 100px 0 100px;
  }
  @media screen and (max-width: 1600px) {
    flex-direction: column;
    main {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 134px 30px 0 30px;
  }
  @media screen and (max-width: 1024px) {
    padding: 134px 10px 0 10px;
  }
`;

const LotsPage = () => {
  return (
    <LotsPageStyle>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <div className="search">
          <form className="search-form">
            <input type="name" placeholder="Lot raqamini kiriting" />
            <select placeholder="Tuman">
              <option>Tuman</option>
              <option>Samarqand</option>
            </select>
            <input type="date" />
            <div className="search-form-buttons">
              <button>Izlash</button>
              <button>
                <TrashIcon />
              </button>
            </div>
          </form>
        </div>
        <LotList />
        <div className="pagination">
          <Pagination count={1860} showFirstButton showLastButton />
        </div>
      </main>
    </LotsPageStyle>
  );
};

export default LotsPage;
