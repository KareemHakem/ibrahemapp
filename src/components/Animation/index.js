import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/Json/arrowAnimation.json";

export const HomeArrowAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};
