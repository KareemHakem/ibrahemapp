import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import "./style.css";

export default function Footer() {
  return (
    <div className="ibr_footer_container">
      <div className="ibr_footer_lift_side_container">
        <a
          className="ibr_footer_lift_side_container_link"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.YouTubeIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.InstagramIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.facebook.com/ibrahimstokar6"
        >
          <Icons.FacebookIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
      </div>

      <div className="ibr_footer_center_side_container">
        <Link className="ibr_footer_logo_a" to="/">
          <h3>STOKER</h3>
        </Link>
      </div>

      <div className="ibr_footer_right_side_container">
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.EmailIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.InstagramIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.FacebookIcon style={{ color: "#ffff", fontSize: 35 }} />
        </a>
      </div>
    </div>
  );
}
