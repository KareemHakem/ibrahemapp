import React from "react";

import { Icons } from "../../assets/icons";

import "aos/dist/aos.css";
import "./style.css";

export default function PhotosContainer({
  location,
  description,
  name,
  image,
}) {
  return (
    <div>
      <div className="ibr_card_photo_detail_container">
        <p className="ibr_card_photo_detail_container_title">
          Location
          <Icons.LocationOnIcon style={{ color: "#00adb5", fontSize: 30 }} />:
          <div style={{ marginLeft: 10 }}>{location}</div>
        </p>
        <div className="ibr_card_img">
          <img src={image} alt="images" />
        </div>
        <div className="ibr_card_photo_detail_container_description">
          <h1 style={{ color: "#00adb5" }}>{name}</h1>
          <h2 style={{ color: "#000", marginTop: 20 }}>{description}</h2>
        </div>
      </div>
    </div>
  );
}
