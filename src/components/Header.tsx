import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head">
      <ul>
        <li>Best Seller</li>
        <li>
          <Link to="/LB/fullOverView">Full Overview</Link>
        </li>
        <li>
          <Link to="/LB/reviews">Reviews</Link>
        </li>
      </ul>
      <input type="text" placeholder="Search Book Category here" />
      <button>Search</button>
    </div>
  );
};

export default Header;
