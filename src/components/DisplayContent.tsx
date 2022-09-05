import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

const DisplayContent = () => {
  const { bookCategoryName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState(false);

  // console.log(bookCategoryName);
  const apiKey = "iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";
  const url = `https://api.nytimes.com/svc/books/v3/lists/${bookCategoryName}.json`;
  // console.log(bookCategoryName);
  const getBookNameBasedOnCategory = async () => {
    try {
      // setError(false);
      setLoading(true);
      const res = await fetch(`${url}?api-key=${apiKey}`);
      const data = await res.json();
      const { results } = data;
      const { books } = results;
      // console.log(results);
      // console.log(books);
      setBooks(books);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      console.log(`is there any errors: ${errors}`);
    }
  };

  //   console.log(books);

  useEffect(() => {
    getBookNameBasedOnCategory();
  }, [url]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errors === true) {
    return (
      <>
        <h1>Something Went Wrong</h1>
        <h3>Error 249 Too Many Request</h3>
      </>
    );
  }

  return (
    <div>
      <div>
        <h1>{bookCategoryName}</h1>
      </div>
      <div className="cards-con">
        <BookCard books={books} />
      </div>
    </div>
  );
};

export default DisplayContent;
