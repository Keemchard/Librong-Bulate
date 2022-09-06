import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./LB-edited.png";

import DisplayContent from "./components/DisplayContent";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import CardComp from "./components/CardComp";

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
      setError(false);
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      const { results } = data;

      setbookCategoryList(results);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      console.log(`is there any errors: ${errors}`);
    }
  };

  useEffect(() => {
    get_book_by_category();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="side-bar">
            <div className="logo">
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
            </div>
            <h2>Book Categories</h2>
            <div className="side-list">
              <Sidebar
                bookCategoryList={bookCategoryList}
                loading={loading}
                errors={errors}
              />
            </div>
          </div>
          <div className="main">
            <div className="header">
              <Header />
            </div>
            <div className="data-con">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/bookCat/:bookCategoryName"
                  element={<DisplayContent />}
                />
                <Route
                  path="/bookCat/:bookCategoryName/:bookTitle"
                  element={<CardComp />}
                />
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
