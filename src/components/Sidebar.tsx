import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Sidebar = ({ bookCategoryList, loading, errors }: any) => {
  const [sideMenuItemName, setSideMenuItemName] = useState("");
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
              <li
                onClick={() => {
                  setSideMenuItemName(items.display_name);
                }}
                style={
                  sideMenuItemName === items.display_name
                    ? { color: "#c3083f" }
                    : {}
                }
              >
                {items.display_name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
