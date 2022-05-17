import React from "react";
import Images from "../../assets/images/pexel1.jpg";
import PhotosContainer from "../Photos/index.js";

export default function IbrPhoto() {
  return (
    <div className="app__bg2 flex_page">
      <div style={{ zIndex: 1000 }}>
        <PhotosContainer
          image={Images}
          location="Cairo,Egypt"
          name="kareem photo"
          description="kareem mohamed photo to camera shotting him in local place whit cam"
        />

        <PhotosContainer
          image={Images}
          location="Cairo,Egypt"
          name="kareem photo"
          description="kareem mohamed photo to camera shotting him in local place whit cam"
        />
      </div>
    </div>
  );
}
