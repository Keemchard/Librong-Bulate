import { useEffect, useState } from "react";
import { OL_BASE } from "../config";
import BookCard from "./BookCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface TrendingWork {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

const TrendingPage = () => {
  const [works, setWorks] = useState<TrendingWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${OL_BASE}/trending/daily.json?limit=24`);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setWorks(data.works || []);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <div className="displayCon">
      <div>
        <h1>
          Trending <span style={{ color: "#C3083F" }}>Today</span>
        </h1>
      </div>
      <div className="cards-con">
        {works.map((w) => (
          <BookCard
            key={w.key}
            workKey={w.key}
            title={w.title}
            authorName={w.author_name?.[0] || "Unknown"}
            coverId={w.cover_i || null}
            year={w.first_publish_year || null}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
