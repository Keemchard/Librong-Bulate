import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OL_BASE, SUBJECTS, coverUrl } from "../config";
import LazyImage from "./LazyImage";
import LoadingPage from "./LoadingPage";

interface TrendingWork {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
}

const HomePage = () => {
  const [trending, setTrending] = useState<TrendingWork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(`${OL_BASE}/trending/daily.json?limit=8`);
        const data = await res.json();
        setTrending(data.works || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="home-page">
      <section className="home-section">
        <h2 className="section-title">Trending Today</h2>
        <div className="home-trending-grid">
          {trending.map((w) => {
            const cover = coverUrl(w.cover_i || null, "M");
            const id = w.key.replace("/works/", "");
            return (
              <Link
                key={w.key}
                to={`/book/${id}`}
                state={{
                  title: w.title,
                  authorName: w.author_name?.[0] || "Unknown",
                  coverId: w.cover_i || null,
                  year: w.first_publish_year || null,
                }}
                className="trending-card"
              >
                {cover ? (
                  <LazyImage
                    src={cover}
                    alt={w.title}
                    className="trending-img-wrap"
                  />
                ) : (
                  <div className="no-cover small">No Cover</div>
                )}
                <div className="trending-info">
                  <p className="trending-title">{w.title}</p>
                  <p className="trending-author">
                    {w.author_name?.[0] || "Unknown"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-title">Browse by Subject</h2>
        <div className="subject-grid">
          {SUBJECTS.slice(0, 12).map((s) => (
            <Link
              key={s.slug}
              to={`/subject/${s.slug}`}
              className="subject-card"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
