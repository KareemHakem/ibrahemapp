import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import AdminEditProfile from "../pages/AdminEditProfile";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

export default function Navigation() {
  const handleGoTop = () => {
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<Profile />} />
        <Route path="/adminEditProfile" element={<AdminEditProfile />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer handleGoTop={handleGoTop} />
    </div>
  );
}
