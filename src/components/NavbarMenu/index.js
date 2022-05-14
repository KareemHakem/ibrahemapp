import React from "react";

import AdminMenu from "../AdminMenu";

import "./style.css";

export default function NavbarMenu({ handleClickOpenEditPage }) {
  return (
    <div>
      <AdminMenu handleClickOpenEditPage={handleClickOpenEditPage} />
    </div>
  );
}
