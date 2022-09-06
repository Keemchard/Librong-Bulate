import { Link, useParams } from "react-router-dom";

const BookCard = ({ books }: any) => {
  const { bookCategoryName } = useParams();
  // console.log(`bookCategoryName is ${bookCategoryName}`);
  console.log(books);
  return (
    <>
      {books.map((items: any) => {
        return (
          <Link
            key={items.book_uri}
            to={`/bookCat/${bookCategoryName}/${items.title}`}
          >
            <div className="book-card">
              <h3 className="title">{items.title}</h3>
              <div className="book-image-con">
                <img src={items.book_image} alt={items.title} />
              </div>
              <div className="rank">
                <p>{`Rank ${items.rank}`}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BookCard;
