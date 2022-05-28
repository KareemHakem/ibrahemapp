import React from "react";
import SingUpAuth from "../../components/SingUpAuth";
import { AuthProvider } from "../../contexts/AuthContext";

export default function SingUp() {
  return (
    <AuthProvider>
      <div className="flex_page">
        <SingUpAuth />
      </div>
    </AuthProvider>
  );
}
