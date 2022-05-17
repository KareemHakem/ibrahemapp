import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
  const navigation = useNavigate();
  const handleNavigationPhotos = () => {
    navigation("/photo");
  };
  return (
    <div className="flex_app">
      <Header handleNavigationPhotos={handleNavigationPhotos} />
    </div>
  );
}
