import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [bookCategoryList, setbookCategoryList] = useState([]);

  const apiKey = "iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";
  const book_by_category_apiUrl =
    "https://api.nytimes.com/svc/books/v3/lists/names.json";

  const get_book_by_category = async () => {
    const res = await fetch(`${book_by_category_apiUrl}?api-key=${apiKey}`);
    const data = await res.json();
    // console.log(data);
    const { results } = data;
    // console.log(results);
    setbookCategoryList(results);
  };
  console.log(bookCategoryList);

  useEffect(() => {
    get_book_by_category();
  }, []);
  // get_book_by_category();

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
                <Route path="/el1" element={<h1>element One</h1>} />
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
