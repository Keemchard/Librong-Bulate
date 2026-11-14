import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OL_BASE } from "../config";
import BookCard from "./BookCard";
import LoadingPage from "./LoadingPage";

interface SearchDoc {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [docs, setDocs] = useState<SearchDoc[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const search = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${OL_BASE}/search.json?q=${encodeURIComponent(query)}&limit=24&fields=key,title,author_name,cover_i,first_publish_year`
        );
        const data = await res.json();
        setDocs(data.docs || []);
        setTotal(data.numFound || 0);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [query]);

  if (loading) return <LoadingPage />;

  if (!query) {
    return (
      <div className="displayCon">
        <h1>Search for books using the search bar above</h1>
      </div>
    );
  }

  return (
    <div className="displayCon">
      <div>
        <h1>
          Results for "<span style={{ color: "#C3083F" }}>{query}</span>"
          <span
            style={{
              fontWeight: "normal",
              fontSize: "16px",
              marginLeft: "10px",
            }}
          >
            {total.toLocaleString()} found
          </span>
        </h1>
      </div>
      <div className="cards-con">
        {docs.length === 0 ? (
          <p style={{ padding: "20px" }}>No books found.</p>
        ) : (
          docs.map((d) => (
            <BookCard
              key={d.key}
              workKey={d.key}
              title={d.title}
              authorName={d.author_name?.[0] || "Unknown"}
              coverId={d.cover_i || null}
              year={d.first_publish_year || null}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
