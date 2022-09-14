import React, { useEffect, useState } from "react";
import BestSellerBookCard from "./BestSellerBookCard";

const BestSeller = () => {
  const [bestSeller, getBestSeller] = useState([]);

  const apiUrl =
    "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";

  const getBestSellerBooks = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const { results } = data;
    // console.log(results);

    getBestSeller(results);
  };

  useEffect(() => {
    getBestSellerBooks();
  }, []);

  //   console.log(bestSeller);

  return (
    <div className="best-seller-con">
      {bestSeller.map((items: any) => {
        return (
          <BestSellerBookCard
            key={items.title}
            title={items.title}
            author={items.author}
            contributor={items.contributor}
            description={items.description}
            publisher={items.publisher}
            rank_history={items.ranks_history}
            reviews={items.reviews}
          />
        );
      })}
    </div>
  );
};

export default BestSeller;
