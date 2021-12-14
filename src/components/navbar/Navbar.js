import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
export const Bars = styled(FaBars)`
  color: #023581;
  font-size: 1.8rem;

  @media screen and (max-width: 1024px) {
    top: 0;
    right: 0;
    position: absolute;
    display: block;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    top: 5px;
    right: 0;
  }
`;
export const Times = styled(FaChevronLeft)`
  display: none;
  border-radius: 50%;
  color: #333;
  padding: 4px;
  color: #fff;
  background-color: #023581;
  z-index: 999;
  @media screen and (max-width: 1420px) {
    position: absolute;
    display: block;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 9999;
    top: -4px;
    left: 310px;
  }
`;

const NavbarStyle = styled.nav`
  .nav {
    top: 40px;
    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: #fff;
  }
  .navbar {
    padding: 0 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(3, 58, 141, 0.2);
    height: 74px;
    width: 100%;
  }
  .logo {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .nav-links {
    display: flex;
  }

  .nav-links li {
    list-style-type: none;
    cursor: pointer;

    &:hover {
      background-color: #ebf3ff;
    }
  }

  .nav-links a {
    line-height: 1.715em;
    letter-spacing: 1px;
    color: #023581;
    text-decoration: none;
    font-size: 21px;
    padding: 18px 15px;
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
  }
  .bar {
    display: none;
    cursor: pointer;
  }
  .bar div {
    width: 25px;
    height: 3px;
    background-color: #023581;
    margin: 5px;
  }

  @media screen and (max-width: 1600px) {
    .navbar {
      padding: 0 70px;
    }
  }

  @media screen and (max-width: 1420px) {
    .navbar {
      padding: 0 50px;
    }
    .logo {
      margin-bottom: 10px;
    }

    @media screen and (max-width: 1024px) {
      .navbar {
        padding: 0 20px;
      }
    }

    .nav-links {
      width: 300px;
      position: fixed;
      left: -30px;
      top: 114px;
      display: flex;
      justify-content: start;
      flex-direction: column;
      border-right: 1px solid rgba(3, 58, 141, 0.2);
      transform: translateX(-110%);
      transition: transform 0.2s ease-in;
      height: 100vh;
      z-index: 999999;
      background-color: #fff;
    }
    .nav-links li {
      border-bottom: 1px solid rgba(3, 58, 141, 0.2);
    }

    .bar {
      display: block;
    }
    .nav-active {
      transform: translateX(0%);
      display: block;
    }
    .nav-links a {
      color: #023581;
      text-decoration: none;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar {
      padding: 0 20px;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarStyle>
      <nav className="nav">
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
            <Times onClick={OpenMenuHandler} />
            <li>
              <NavLink to="/lots">Lotlar</NavLink>
            </li>
            <li>
              <NavLink to="/help">Yordam</NavLink>
            </li>
            <li>
              <NavLink to="/about">Auksion haqida</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Bog'lanish</NavLink>
            </li>
          </ul>
          <div className="bar" onClick={OpenMenuHandler}>
            <Bars />
          </div>
        </div>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
