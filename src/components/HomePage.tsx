import React from "react";
import logo from "./LB.png";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "100%", borderRadius: "50%" }}
        src={logo}
        alt="logo"
      />
      <h1 style={{ marginTop: "10px" }}>Home Page</h1>
    </div>
  );
};

export default HomePage;
