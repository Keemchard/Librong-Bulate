import { Link } from "react-router-dom";
import { coverUrl } from "../config";
import LazyImage from "./LazyImage";

interface BookCardProps {
  workKey: string;
  title: string;
  authorName: string;
  coverId: number | null;
  year: number | null;
}

const BookCard = ({ workKey, title, authorName, coverId, year }: BookCardProps) => {
  const id = workKey.replace("/works/", "");
  const cover = coverUrl(coverId, "M");

  return (
    <Link
      to={`/book/${id}`}
      state={{ title, authorName, coverId, year }}
    >
      <div className="book-card">
        <h3 className="title">{title}</h3>
        <div className="book-image-con">
          {cover ? (
            <LazyImage src={cover} alt={title} className="book-cover-wrap" />
          ) : (
            <div className="no-cover">No Cover</div>
          )}
        </div>
        <div className="rank">
          <p className="book-author">{authorName}</p>
          {year && <p className="book-year">{year}</p>}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
