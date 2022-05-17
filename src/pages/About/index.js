import React, { useRef } from "react";
import AboutInformation from "../../components/AboutInformation";
import GalleryPhotosSlider from "../../components/GalleryPhotosSlider";
import "./style.css"

export default function About() {
  const handleNavigationToPhotos = () => {};
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="ibr_about_page">
      <AboutInformation />
      <GalleryPhotosSlider
        handleNavigationToPhotos={handleNavigationToPhotos}
        scroll={scroll}
        scrollRef={scrollRef}
      />
    </div>
  );
}
