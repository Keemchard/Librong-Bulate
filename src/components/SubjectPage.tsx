import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OL_BASE } from "../config";
import BookCard from "./BookCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface SubjectWork {
  key: string;
  title: string;
  authors?: { name: string }[];
  cover_id?: number;
  first_publish_year?: number;
}

const SubjectPage = () => {
  const { slug } = useParams();
  const [works, setWorks] = useState<SubjectWork[]>([]);
  const [subjectName, setSubjectName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(
          `${OL_BASE}/subjects/${slug}.json?limit=24`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSubjectName(data.name || slug || "");
        setWorks(data.works || []);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubject();
  }, [slug]);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;

  return (
    <div className="displayCon">
      <div>
        <h1>
          <span style={{ color: "#C3083F" }}>{subjectName}</span>
          <span style={{ fontWeight: "normal", fontSize: "16px", marginLeft: "10px" }}>
            {works.length} books
          </span>
        </h1>
      </div>
      <div className="cards-con">
        {works.map((w) => (
          <BookCard
            key={w.key}
            workKey={w.key}
            title={w.title}
            authorName={w.authors?.[0]?.name || "Unknown"}
            coverId={w.cover_id || null}
            year={w.first_publish_year || null}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;
