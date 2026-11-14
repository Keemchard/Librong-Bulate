import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./LB-edited.png";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoadingPage from "./components/LoadingPage";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./components/HomePage"));
const SubjectPage = lazy(() => import("./components/SubjectPage"));
const BookDetail = lazy(() => import("./components/BookDetail"));
const TrendingPage = lazy(() => import("./components/TrendingPage"));
const SearchResults = lazy(() => import("./components/SearchResults"));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <div
          className={`sidebar-overlay${sidebarOpen ? " active" : ""}`}
          onClick={closeSidebar}
        />
        <div className={`side-bar${sidebarOpen ? " open" : ""}`}>
          <div className="logo">
            <Link to="/" onClick={closeSidebar}>
              <img className="logo" src={logo} alt="Librong Bulate" />
            </Link>
          </div>
          <h2>Subjects</h2>
          <div className="side-list">
            <Sidebar onNavigate={closeSidebar} />
          </div>
        </div>
        <div className="main">
          <div className="header">
            <button
              className="hamburger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
            <Header />
          </div>
          <div className="data-con">
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/subject/:slug" element={<SubjectPage />} />
                <Route path="/book/:workId" element={<BookDetail />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </Suspense>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
