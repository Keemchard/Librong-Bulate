import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookCard = ({ books }: any) => {
  console.log(books);
  return (
    <>
      {books.map((items: any) => {
        return (
          <div key={items.book_uri} className="book-card">
            <h2>{items.title}</h2>
            <img src={items.book_image} alt={items.title} />;
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
