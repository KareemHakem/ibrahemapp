import React from "react";
import Header from "../../components/Header";
import CardPhotos from "../../components/CardPhotos";

export default function Home() {
  return (
    <div className="app__bg">
      <Header />
      <CardPhotos  />
    </div>
  );
}
