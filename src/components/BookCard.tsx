const BookCard = ({ books }: any) => {
  console.log(books);
  return (
    <>
      {/* <p>{`Top ${books.length}`}</p> */}
      {books.map((items: any) => {
        return (
          <div key={items.book_uri} className="book-card">
            <h3 className="title">{items.title}</h3>
            <div className="book-image-con">
              <img src={items.book_image} alt={items.title} />
            </div>
            <div className="rank">
              <p>{`Rank ${items.rank}`}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
