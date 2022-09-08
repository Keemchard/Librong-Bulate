import React from "react";

const Books = ({
  bookTitle,
  bookImage,
  bookRank,
  bookAuthor,
  bookUpdatedDate,
}: any) => {
  return (
    <>
      <div className="bookComp">
        <p>{`Rank ${bookRank}`}</p>
        <p>{`Updated Date: ${bookUpdatedDate}`}</p>
        <img src={bookImage} alt="" />
        <h3>{bookTitle}</h3>
        <p>{`Authored by ${bookAuthor}`}</p>
      </div>
    </>
  );
};

export default Books;
