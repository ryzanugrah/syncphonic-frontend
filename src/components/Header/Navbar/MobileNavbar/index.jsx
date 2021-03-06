import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaTimes, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import Swal from "sweetalert2";

import { logout } from "../../../../redux/apiCalls";
import {
  Overlay,
  MobileNavbarContainer,
  Icon,
  NavLogo,
  MobileNavbarWrapper,
  MobileNavbarMenu,
  MobileNavbarLink,
  MobileBtnWrap,
} from "./style";
import { MobileNavButton } from "../../../Button";
import { MobileNavOutlineButton } from "../../../Button";
import { theme } from "../../../../assets/styles/style";
import logo from "../../../../logo-light.svg";

const MobileNavbar = ({ isOpen, toggle, light }) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  let history = useHistory();

  const dropdownButton = {
    fontSize: "16px",
  };

  const dropdownMenu = {
    backgroundColor: "#242323",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    margin: "0 0.5rem 0 0.5rem",
    width: "89%",
  };

  const dropdownDivider = {
    height: "0",
    margin: "0.5rem 0",
    overflow: "hidden",
    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
  };

  const handleClickLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "warning",
      title: "Anda yakin?",
      text: "Tekan tombol ya jika ingin keluar!",
      confirmButtonColor: "#A6711F",
      confirmButtonText: "Ya",
      showCancelButton: true,
      cancelButtonColor: "#52000D",
      cancelButtonText: "Tidak",
      timer: 5000,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Berhasil keluar akun!",
          text: "Sampai jumpa",
          showConfirmButton: false,
          timer: 1500,
        });
        logout(dispatch);
        toggle();
        history.push("/syncphonic-frontend");
      } else if (result.isDismissed) {
        Swal.fire({
          icon: "info",
          title: "Yes...",
          text: "Berhasil kembali!",
          confirmButtonColor: "#A6711F",
          confirmButtonText: "Ok",
          timer: 1500,
        });
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Overlay isOpen={isOpen}>
        <MobileNavbarContainer light={light} isOpen={isOpen}>
          <Icon light={light} onClick={toggle}>
            <FaTimes />
          </Icon>
          <NavLogo to="/syncphonic-frontend">
            <img width="128px" src={logo} alt="logo" onClick={toggle} />
          </NavLogo>
          <MobileNavbarWrapper>
            <MobileNavbarMenu>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/studio"
                onClick={toggle}
                className={
                  window.location.href.includes("/syncphonic-frontend/studio")
                    ? "active"
                    : ""
                }
              >
                Sewa Studio
              </MobileNavbarLink>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/instrument"
                onClick={toggle}
                className={
                  window.location.href.includes(
                    "/syncphonic-frontend/instrument"
                  )
                    ? "active"
                    : ""
                }
              >
                Sewa Instrument
              </MobileNavbarLink>
              <MobileNavbarLink
                light={light}
                to="/syncphonic-frontend/blog"
                onClick={toggle}
                className={
                  window.location.href.includes("/syncphonic-frontend/blog")
                    ? "active"
                    : ""
                }
              >
                Blog
              </MobileNavbarLink>
            </MobileNavbarMenu>
            {!user ? (
              <>
                <MobileBtnWrap>
                  <MobileNavOutlineButton
                    theme={{
                      bgColor: theme.colors.accent,
                      color: theme.colors.light,
                      hoverColor: theme.colors.hover,
                    }}
                    light={light}
                    to="/syncphonic-frontend/masuk"
                    onClick={toggle}
                  >
                    Masuk
                  </MobileNavOutlineButton>
                </MobileBtnWrap>
                <MobileBtnWrap>
                  <MobileNavButton
                    theme={{
                      bgColor: theme.colors.accent,
                      color: theme.colors.light,
                      hoverColor: theme.colors.hover,
                    }}
                    to="/syncphonic-frontend/daftar"
                    onClick={toggle}
                  >
                    Daftar
                  </MobileNavButton>
                </MobileBtnWrap>
              </>
            ) : (
              <div className="dropdown">
                <MobileBtnWrap
                  id="dropdownUser"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MobileNavButton
                    theme={{
                      bgColor: theme.colors.accent,
                      color: theme.colors.light,
                      hoverColor: theme.colors.hover,
                    }}
                    className="btn dropdown-toggle"
                    type="button"
                    to="#"
                    style={dropdownButton}
                  >
                    {`Akun Saya`}
                  </MobileNavButton>
                </MobileBtnWrap>
                <ul
                  className="dropdown-menu"
                  style={dropdownMenu}
                  aria-labelledby="dropdownUser"
                >
                  <li>
                    <MobileNavbarLink
                      light={light}
                      to="/syncphonic-frontend/dashboard"
                      className="dropdown-item mt-2"
                    >
                      <FaTachometerAlt /> &ensp;Dashboard
                    </MobileNavbarLink>
                  </li>
                  <div style={dropdownDivider}></div>
                  <li>
                    <MobileNavbarLink
                      light={light}
                      to="#"
                      className="dropdown-item mt-2"
                      onClick={handleClickLogout}
                    >
                      <FaSignOutAlt /> &ensp;Keluar
                    </MobileNavbarLink>
                  </li>
                </ul>
              </div>
            )}
          </MobileNavbarWrapper>
        </MobileNavbarContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default MobileNavbar;
