import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { OL_BASE, coverUrl } from "../config";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface WorkData {
  title?: string;
  description?: string | { value: string };
  subjects?: string[];
  links?: { title: string; url: string }[];
  authors?: { author: { key: string } }[];
  covers?: number[];
  first_publish_date?: string;
}

const BookDetail = () => {
  const { workId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    title?: string;
    authorName?: string;
    coverId?: number | null;
    year?: number | null;
  } | null;

  const [work, setWork] = useState<WorkData | null>(null);
  const [authorName, setAuthorName] = useState(state?.authorName || "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${OL_BASE}/works/${workId}.json`);
        if (!res.ok) throw new Error("Not found");
        const data: WorkData = await res.json();
        setWork(data);

        if (!authorName && data.authors?.[0]?.author?.key) {
          const aRes = await fetch(
            `${OL_BASE}${data.authors[0].author.key}.json`
          );
          const aData = await aRes.json();
          setAuthorName(aData.name || "Unknown");
        }
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWork();
  }, [workId, authorName]);

  if (loading) return <LoadingPage />;
  if (error || !work) return <ErrorPage />;

  const title = work.title || state?.title || "Untitled";
  const coverId = state?.coverId || work.covers?.[0] || null;
  const cover = coverUrl(coverId, "L");
  const desc =
    typeof work.description === "string"
      ? work.description
      : work.description?.value || "";
  const subjects = work.subjects?.slice(0, 8) || [];
  const links = work.links || [];

  return (
    <div className="info-main">
      <div className="info">
        <div className="img-sec">
          {cover ? (
            <img src={cover} alt={title} />
          ) : (
            <div className="no-cover large">No Cover</div>
          )}
        </div>
        <div className="info-sec">
          <div className="info-in-text">
            <h2 className="info-title" style={{ marginBottom: "15px" }}>
              {title}
            </h2>
            <p>
              Author: <span>{authorName || "Unknown"}</span>
            </p>
            {state?.year && (
              <p>
                First Published: <span>{state.year}</span>
              </p>
            )}
            {work.first_publish_date && (
              <p>
                Published: <span>{work.first_publish_date}</span>
              </p>
            )}
            {desc && (
              <p style={{ marginTop: "12px", lineHeight: "1.6" }}>{desc}</p>
            )}
          </div>

          {subjects.length > 0 && (
            <div style={{ marginTop: "15px" }}>
              <p style={{ marginBottom: "8px" }}>Subjects:</p>
              <div className="subject-tags">
                {subjects.map((s) => (
                  <span key={s} className="subject-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {links.length > 0 && (
            <div style={{ marginTop: "15px" }}>
              <p style={{ marginBottom: "8px" }}>Links:</p>
              <div className="button-con">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="buy-link-btn">{link.title}</button>
                  </a>
                ))}
              </div>
            </div>
          )}

          <a
            href={`${OL_BASE}/works/${workId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="buy-link-btn" style={{ marginTop: "15px" }}>
              View on Open Library
            </button>
          </a>
        </div>
      </div>
      <button className="back-to-disp" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default BookDetail;
