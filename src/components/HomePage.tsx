import React, { useState } from "react";
import logo from "./LB.png";

const HomePage = () => {
  // const [dayToday, setDayToday] = useState<number>();
  const date = new Date();
  let day = date.getDay();

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayToday = week[day];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{ width: "500px", borderRadius: "50%" }}
          src={logo}
          alt="logo"
        />
      </div>
      {/* <h1 style={{ marginTop: "10px" }}>Home Page</h1> */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <h1 style={{ margin: "10px 0" }}>
          &#128044;{` Happy ${dayToday}! `}&#128044;
        </h1>
        <p>
          Welcome to{" "}
          <span style={{ color: "#c3083f", fontWeight: "bold" }}>LB</span>! To
          explore, simply click anything that is clickable in this Web App
          &#128516;.
        </p>
        <p>
          Click{" "}
          <span
            style={{
              color: "#c3083f",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            here
          </span>{" "}
          to learn more.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
