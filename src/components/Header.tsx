import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  const [menuName, setMenuName] = useState("");
  return (
    <div className="head">
      <ul>
        <li>Best Seller</li>
        <li>
          <Link
            className="head-l"
            to="/LB/fullOverView"
            onClick={() => {
              setMenuName("Full Overview");
            }}
            style={
              menuName === "Full Overview"
                ? { color: "#c3083f", fontWeight: "bold" }
                : {}
            }
          >
            Full Overview
          </Link>
        </li>
        <li>
          <Link
            className="head-l"
            to="/LB/reviews"
            onClick={() => {
              setMenuName("Reviews");
            }}
            style={
              menuName === "Reviews"
                ? { color: "#c3083f", fontWeight: "bold" }
                : {}
            }
          >
            Reviews
          </Link>
        </li>
      </ul>
      <input type="text" placeholder="Search Book Category here" />
      <button>Search</button>
    </div>
  );
};

export default Header;
