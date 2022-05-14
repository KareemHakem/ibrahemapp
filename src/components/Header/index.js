import React from "react";
import Typical from "react-typical";
import Image from "../../assets/images/ibarhem.jpg";
import "./style.css";

export default function Header() {
  return (
    <div className="app__bg">
      <div className="ibr_header_sides_container">
        <div className="ibr_left_side">
          <img src={Image} alt="ibr_image" />
        </div>
        <div className="ibr_right_side">
          <h1 className="ibr_left_side_text"> ibrahim stokar </h1>
          <div className="ibr_right_side_text ml12">
            <Typical
              steps={[
                "I am get all your happy moments and frozen it in photo",
                8000,
              ]}
              loop={Infinity}
              wrapper="h1"
            />
            <Typical
              steps={[
                "Success is nothing more than a",
                1000,
                "Success is nothing more  than a few simple decisions practiced every day!",
                800,
              ]}
              loop={Infinity}
              wrapper="h4"
            />
            <div>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
