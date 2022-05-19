import React from "react";

import { Icons } from "../../assets/icons";
import { photosDetail } from "../../assets/data/index";

import Button from "@mui/material/Button";

import "./style.css";

export default function PhotosContainer() {
  return (
    <div className="flex_page">
      {photosDetail.map((photo) => (
        <div key={photo.id} className="ibr_card_photo_container">
          <img src={photo.image} alt="images" />
          <div className="ibr_card_photo_detail_time_data">
            <p>---</p>
            <p>{photo.date}</p>
            <p>---</p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons.LocationOnIcon style={{ marginBottom: 8 }} />
              {photo.location}
            </p>
          </div>
          <div className="ibr_line_card" />
          <div className="ibr_card_photo_detail_name">
            <h2>{photo.name}</h2>
            <p>{photo.description}</p>
          </div>
          <div className="ibr_btn_post">
            <Button className="ibr_btn_card_Post">
              <Icons.EditIcon style={{ color: "#00adb5", marginRight: 5 }} />
              Edit
            </Button>
            <Button className="ibr_btn_card_Post">
              <Icons.DeleteIcon style={{ color: "#FF0000", marginRight: 5 }} />
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
