import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import DisplayContent from "./components/DisplayContent";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [bookCategoryList, setbookCategoryList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setError] = useState(false);

  const apiKey = "iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";
  const book_by_category_apiUrl =
    "https://api.nytimes.com/svc/books/v3/lists/names.json";
  const url = `${book_by_category_apiUrl}?api-key=${apiKey}`;
  const get_book_by_category = async () => {
    try {
      // setError(false);
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      const { results } = data;
      // console.log(results);
      setbookCategoryList(results);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      console.log(`is there any errors: ${errors}`);
    }
  };
  // console.log(bookCategoryList);

  useEffect(() => {
    get_book_by_category();
  }, [url]);
  // get_book_by_category();

  if (loading) {
    return <h1>Loading list of book Categories</h1>;
  }

  if (errors) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="side-bar">
            <h1>Side Bar</h1>
            <div className="side-list">
              <Sidebar bookCategoryList={bookCategoryList} />
            </div>
          </div>
          <div className="main">
            <div className="header">
              <Header />
            </div>
            <div className="data-con">
              <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route
                  path="/bookCat/:bookCategoryName"
                  element={<DisplayContent />}
                />
                <Route path="/el2" element={<h1>element Two</h1>} />
              </Routes>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
