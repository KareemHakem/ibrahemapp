import { Routes, Route } from "react-router-dom";

import Navbar from "../commons/Navbar";
import Home from "../pages/Home/index.js";

export default function Navigation() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
