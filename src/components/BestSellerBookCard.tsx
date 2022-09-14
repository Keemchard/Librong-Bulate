import React, { useState } from "react";

const BestSellerBookCard = ({
  title,
  author,
  contributor,
  description,
  publisher,
  rank_history,
  reviews,
}: any) => {
  const [openRank, getOpenRank] = useState<boolean>(false);
  const [openReview, getOpenReview] = useState<boolean>(false);

  return (
    <div className="best-seller-card">
      <h2 style={{ margin: "5px 0" }}>Title: {title}</h2>
      <p>Author: {author}</p>
      <p>contributor: {contributor}</p>
      <p>
        Desciption: <span style={{ fontStyle: "italic" }}>{description}</span>
      </p>
      <p>Publisher: {publisher}</p>
      <div className="bs-btn-con">
        <div>
          {openRank ? (
            <div>
              <Button
                title="Close"
                myFunct={() => {
                  getOpenRank(false);
                }}
              />
              <div style={{ margin: "10px" }}>
                {rank_history.map((rankH: any) => {
                  return (
                    <div key={Math.random()}>
                      <p>Best Seller Date: {rankH.bestsellers_date}</p>
                      <p>From The Category of: {rankH.display_name}</p>
                      <p>Published Date: {rankH.published_date}</p>
                      <p>Rank: {rankH.rank}</p>
                      <p>Rank last week: {rankH.rank_last_week}</p>
                      <p>Weeks on list: {rankH.weeks_on_lsit}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <Button
              title="See Rank History"
              myFunct={() => {
                getOpenRank(true);
              }}
            />
          )}
        </div>
        <div>
          <div>
            {openReview ? (
              <div>
                <Button
                  title="Close"
                  myFunct={() => {
                    getOpenReview(false);
                  }}
                />
                <div style={{ margin: "10px" }}>
                  {reviews.map((rev: any) => {
                    return (
                      <div key={Math.random()}>
                        <p>Article Chapter Link: {rev.article_chapter_link}</p>
                        <p>Book Review Link: {rev.book_review_link}</p>
                        <p>First Chapter Link: {rev.first_chapter_link}</p>
                        <p>Sunday Review: {rev.sunday_review_link}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <Button
                title="See Reviews"
                myFunct={() => {
                  getOpenReview(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerBookCard;

const Button = ({ title, myFunct }: any) => {
  return (
    <button
      style={{
        backgroundColor: "#6f2232",
        padding: "10px",
        cursor: "pointer",
        margin: "7px 0",
        border: "none",
        borderRadius: "20px ",
        width: "150px",
      }}
      onClick={() => {
        myFunct();
      }}
    >
      {title}
    </button>
  );
};
