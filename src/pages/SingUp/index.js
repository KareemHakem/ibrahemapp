import React from "react";
import SingUpAuth from "../../components/SingUpAuth";

export default function SingUp() {
  const handleAuthLoginUserSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className="flex_page">
      <SingUpAuth
        handleAuthLoginUserSubmit={handleAuthLoginUserSubmit}
        // loading={loading}
      />
    </div>
  );
}
