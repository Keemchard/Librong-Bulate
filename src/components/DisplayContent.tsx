import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const DisplayContent = () => {
  const { bookCategoryName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(false);

  const apiKey = "iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";
  const url = `https://api.nytimes.com/svc/books/v3/lists/${bookCategoryName}.json`;

  const getBookNameBasedOnCategory = async () => {
    try {
      setError(false);
      setLoading(true);
      const res = await fetch(`${url}?api-key=${apiKey}`);
      const data = await res.json();
      const { results } = data;
      const { books } = results;

      setBooks(books);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      console.log(`is there any errors: ${errors}`);
    }
  };

  useEffect(() => {
    getBookNameBasedOnCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading) {
    return <LoadingPage />;
  }

  if (errors) {
    return <ErrorPage />;
  }

  return (
    <div className="displayCon">
      <div>
        <h1>
          Top <span style={{ color: "#C3083F" }}>{books.length}</span>{" "}
          {bookCategoryName?.toUpperCase()}
        </h1>
      </div>
      <div className="cards-con">
        <BookCard books={books} />
      </div>
    </div>
  );
};

export default DisplayContent;
