import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function AdminMenu({ handleClickOpenEditPage }) {
  return (
    <div className=" menu_container">
      <div className=" menu_container scale-up-center">
        <ul className="dropdown_menu">
          <li className="dropdown_item-1">
            <Link onClick={handleClickOpenEditPage} to="/SingUp">
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
