import React, { useEffect, useState } from "react";
import Category from "./Category";
import LoadingPage from "./LoadingPage";

const FullOverview = () => {
  const [fullOverviewLists, setFullOverviewLists] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl =
    "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=iXBpJ9qHefj1NhixHqALLwoxXPJ0ArRl";

  const getFullOverview = async () => {
    setLoading(true);
    const res = await fetch(apiUrl);
    const data = await res.json();
    const { results } = data;
    const { lists } = results;

    setFullOverviewLists(lists);
    setLoading(false);
  };

  useEffect(() => {
    getFullOverview();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="fo">
        <Category fullOverviewLists={fullOverviewLists} />
      </div>
    </>
  );
};

export default FullOverview;
