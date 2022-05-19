import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

export default function Home() {
  const navigation = useNavigate();

  const handleNavigationToAbout = () => {
    navigation("/about");
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex_app">
      <Header handleNavigationToAbout={handleNavigationToAbout} />
    </div>
  );
}
