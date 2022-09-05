import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ bookCategoryList }: any) => {
  return (
    <>
      <ul>
        {bookCategoryList.map((items: any) => {
          return (
            <Link
              to={`/bookCat/${items.list_name_encoded}`}
              key={items.list_name_encoded}
            >
              <li>{items.display_name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
