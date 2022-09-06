import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const CardComp = () => {
  const { bookCategoryName, bookTitle } = useParams();
  const [loading, setLoading] = useState<boolean>();
  const [displayBuyLink, setDisplayBuyLink] = useState<boolean>();
  const [BLbtnName, setBLbtnName] = useState<string>("See Buy Links");

  const [specificBook, setSpecificBook] = useState([]);
  //   console.log(bookCategoryName);
  const apiKey = "iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";
  const url = `https://api.nytimes.com/svc/books/v3/lists/${bookCategoryName}.json?api-key=${apiKey}`;

  const getBook = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const { results } = data;
      const { books } = results;

      books.map((items: any) => {
        if (items.title === bookTitle) {
          return setSpecificBook(items);
        }
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  //   console.log(specificBook);

  const {
    amazon_product_url,
    author,
    book_image,
    book_uri,
    buy_links,
    contributor,
    description,
    publisher,
    rank,
    rank_last_week,
    title,
    weeks_on_list,
  }: any = specificBook;

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="info-main">
      <div className="info-head">
        <h2>From {bookCategoryName?.toUpperCase()} Category</h2>
      </div>
      <div className="info">
        <div className="img-sec">
          <img src={book_image} alt="" />
        </div>
        <div className="info-sec">
          <div className="info-in-text">
            <h2 style={{ marginBottom: "20px" }} className="info-title">
              Title: {title}
            </h2>
            <p>
              Author: <span>{author}</span>
            </p>
            <p>
              Contributor: <span>{contributor}</span>
            </p>
            <p>
              Rank: <span>{rank}</span>
            </p>
            <p>
              Rank Last week: <span>{rank_last_week}</span>
            </p>
            <p>
              Weeks on list: <span>{weeks_on_list}</span>
            </p>
            <p>
              Publisher: <span>{publisher}</span>
            </p>
            <p>
              Description: <span>{description}</span>
            </p>
            {/* <a href={book_uri}>
              <span>{book_uri}</span>
            </a> */}
          </div>
          <div>
            <div>
              {BLbtnName === "See Buy Links" ? (
                <p
                  className="open-BL"
                  onClick={() => {
                    setDisplayBuyLink(true);
                    setBLbtnName("Close");
                  }}
                >
                  {BLbtnName}
                </p>
              ) : (
                <p
                  className="open-BL"
                  onClick={() => {
                    setDisplayBuyLink(false);
                    setBLbtnName("See Buy Links");
                  }}
                >
                  {BLbtnName}
                </p>
              )}

              {displayBuyLink === true ? (
                <div className="button-con">
                  {buy_links.map((items: any) => {
                    return (
                      <a href={items.url} target="blank">
                        <button className="buy-link-btn">{items.name}</button>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div>Click button to show button links</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to={`/bookCat/${bookCategoryName}`}>
        <button className="back-to-disp">Back</button>
      </Link>
    </div>
  );
};

export default CardComp;
