import React from "react";
import Header from "../component/Header";
import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3002/colors?limit=2&page=${pageParam}`);
};

function InfinityQuery() {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  let content = null;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (isError) {
    content = <h1>{error}</h1>;
  }
  if (data?.pages) {
    content = data.pages.map((group) => (
      <>
        {group.data.map((color) => (
          <h2 key={color.id}>{color.name}</h2>
        ))}
      </>
    ));
  }

  console.log(data);

  return (
    <div>
      <Header />
      <h1> InfinityQuery</h1>
      {content}
      {(isFetching || isFetchingNextPage) && <h2>Loading....</h2>}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
    </div>
  );
}

export default InfinityQuery;
