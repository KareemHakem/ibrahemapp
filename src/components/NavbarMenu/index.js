import React from "react";

import AdminMenu from "../AdminMenu";
import VisitorMenu from "../VisitorMenu";

import "./style.css";

const types = {
  Admin: "Admin",
  Visitor: "Visitor",
};

export default function NavbarMenu() {
  switch (types) {
    case types.Admin:
      return <AdminMenu />;
    case types.Visitor:
      return <VisitorMenu />;
    default:
      return <></>;
  }
}
