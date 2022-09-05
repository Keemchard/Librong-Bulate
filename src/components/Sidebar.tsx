import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Sidebar = ({ bookCategoryList, loading, errors }: any) => {
  if (loading) {
    return (
      <div>
        <h3>Loading list of book Categories</h3>
      </div>
    );
  }

  if (errors) {
    return <ErrorPage />;
  }
  return (
    <>
      <ul>
        {bookCategoryList.map((items: any) => {
          return (
            <Link
              to={`/bookCat/${items.list_name_encoded}`}
              key={items.list_name_encoded}
              className="link-class"
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
