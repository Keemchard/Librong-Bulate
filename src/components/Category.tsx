import Books from "./Books";

const Category = ({ fullOverviewLists }: any) => {
  // const [bookOverview, setBookOverview] = useState([]);
  // console.log(categoryNames);
  // console.log(books);
  // console.log(fullOverviewLists);

  return (
    <>
      <div className="Fo-main">
        {fullOverviewLists.map((items: any) => {
          return (
            <div className="Fo-con" key={items.list_id}>
              <h1>{items.display_name}</h1>
              <div className="bookOverview-s">
                {items.books.map((bookO: any) => {
                  const { title, author, book_image, rank, updated_date } =
                    bookO;
                  return (
                    <Books
                      key={title}
                      bookTitle={title}
                      bookImage={book_image}
                      bookAuthor={author}
                      bookRank={rank}
                      bookUpdatedDate={updated_date}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
