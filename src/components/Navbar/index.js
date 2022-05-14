import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "../NavbarMenu";
import NavbarRightSide from "../NavbarRightSide";
import "./style.css";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleClickToggle = () => {
    handleToggle();
  };

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
