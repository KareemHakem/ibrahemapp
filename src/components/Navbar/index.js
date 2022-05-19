import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarMenu from "../NavbarMenu";
import NavbarRightSide from "../NavbarRightSide";
import "./style.css";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigation = useNavigate();

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleClickToggle = () => {
    handleToggle();
    navigation("/login");
  };

  return (
    <div className="ibr_navbar">
      <div className="ibr_navbar_sides_container">
        <div className="ibr_navbar_left_container">
          <Link className="ibr_navbar_logo_link" to="/">
            STOKAR
          </Link>
          <div className="ibr_center_link_navbar">
            <Link className="ibr_navbar_link_Portfolio" to="/">
              Portfolio
            </Link>
            <Link className="ibr_navbar_link" to="about">
              ABOUT
            </Link>
            <Link className="ibr_navbar_link" to="photo">
              PHOTO
            </Link>
          </div>
        </div>
        <NavbarRightSide handleOpenMenu={handleToggle} />
      </div>
      <div className="ibr_menu_display">
        {displayMenu && (
          <NavbarMenu handleClickOpenEditPage={handleClickToggle} />
        )}
      </div>
    </div>
  );
}
