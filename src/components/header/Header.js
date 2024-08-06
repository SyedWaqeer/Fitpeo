import React from 'react';
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import './Header.css';
import Customer5 from '../../assets/customer3.jpg';
import Logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} style={{ height: '40px', width: "40px" }} alt="Logo" className="rounded-circle" />
        </a>

        <div className="search-bar">
          <div className="input-group">
            <span className="input-group-text bg-black border-black text-white">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control  bg-black border-black "
              placeholder="Search"
            />
          </div>
        </div>
        <div className="ms-auto profile">
          <a className="nav-link text-light" href="#">
            <FaBell />
          </a>
          <a className="nav-link text-light" href="#">
            <FaCog />
          </a>
          <a className="nav-link text-light" href="#">
            <FaUserCircle />
          </a>
          <a className="nav-link text-light" href="#">
            <img src={Customer5} alt="User Avatar" className="rounded-circle" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
