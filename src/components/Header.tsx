import React from "react";

const Header = () => {
  return (
    <div className="head">
      <ul>
        <li>Best Seller</li>
        <li>Full Overview</li>
        <li>Reviews</li>
      </ul>
      <input type="text" placeholder="Search Book Category here" />
      <button>Search</button>
    </div>
  );
};

export default Header;
