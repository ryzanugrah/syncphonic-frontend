import React from "react";
import { Link } from "react-router-dom";

import { FaTachometerAlt, FaCalendarAlt } from "react-icons/fa";

import logo from "../../../../logo-light.svg";
import logoMobile from "../../../../logo-favicon-light.svg";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <Link className="sidebar-brand-text mx-3" to="/syncphonic-frontend">
          <img width="128px" src={logo} alt="logo" />
        </Link>
        <Link className="sidebar-brand-icon mx-3" to="/syncphonic-frontend">
          <img width="48px" src={logoMobile} alt="logo" />
        </Link>
      </div>
      <hr className="sidebar-divider my-2" />
      <li className="nav-item">
        <div className="nav-item-link">
          <Link className="nav-link" to="/syncphonic-frontend/dashboard">
            <i>
              <FaTachometerAlt />
            </i>
            <span>Dashboard</span>
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-item-link">
          <Link
            className="nav-link"
            to="/syncphonic-frontend/dashboard/pesanan"
          >
            <i>
              <FaCalendarAlt />
            </i>
            <span>Riwayat Pesanan</span>
          </Link>
        </div>
      </li>
      <hr className="sidebar-divider d-none d-md-block my-2" />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle my-2" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
