import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="head">
      <ul>
        <li>
          <Link
            className="head-l"
            to="/"
            style={
              isActive("/") ? { color: "#c3083f", fontWeight: "bold" } : {}
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="head-l"
            to="/trending"
            style={
              isActive("/trending")
                ? { color: "#c3083f", fontWeight: "bold" }
                : {}
            }
          >
            Trending
          </Link>
        </li>
      </ul>
      <form onSubmit={handleSearch} style={{ display: "contents" }}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
