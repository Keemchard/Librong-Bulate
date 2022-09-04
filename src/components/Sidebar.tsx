import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ bookCategoryList }: any) => {
  return (
    <>
      <ul>
        {bookCategoryList.map((items: any) => {
          return (
            <Link to="/el1">
              <li>{items.display_name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
