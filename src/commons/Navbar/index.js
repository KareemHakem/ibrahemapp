import React from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "../../components/NavbarMenu";
import "./style.css";

export default function Navbar() {
  return (
    <div className="ibr_navbar">
      <div className="ibr_navbar_sides_container">
        <div className="ibr_navbar_left_container">
          <Link className="ibr_navbar_logo_link" to="/">
            STOKAR
          </Link>
          <Link className="ibr_navbar_link" to="about">
            ABOUT
          </Link>
          <Link className="ibr_navbar_link" to="photo">
            PHOTO
          </Link>
        </div>
        <NavbarMenu />
      </div>
    </div>
  );
}
