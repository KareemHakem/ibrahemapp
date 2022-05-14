import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminEditProfile from "../pages/AdminEditProfile";
import Profile from "../pages/Profile";
import Footer from "../components/Footer";

export default function Navigation() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<Profile />} />
        <Route path="/adminEditProfile" element={<AdminEditProfile />} />
      </Routes>
      <Footer />
    </>
  );
}
