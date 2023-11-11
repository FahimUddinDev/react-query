import React, { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useQuery } from "react-query";

const colorFetch = ({ queryKey }) => {
  const pageNumber = queryKey[1];
  return axios.get(`http://localhost:3002/colors?limit=2&page=${pageNumber}`);
};

function PaginationQuery() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["colors", pageNumber],
    colorFetch,
    {
      keepPreviousData: true, //for keep last success full data fetching
    }
  );

  let content = null;

  if (isLoading) {
    content = <h3>Loading......</h3>;
  }
  if (isError) {
    content = <h3>{error}</h3>;
  }

  if (data?.data) {
    content = data?.data?.map((color) => <h4 key={color.id}>{color.name}</h4>);
  }

  return (
    <div>
      <Header />
      <h1>PaginationQuery</h1>
      {content}
      <div>
        <span onClick={() => setPageNumber(1)}>1</span>
        <span onClick={() => setPageNumber(2)}>2</span>
        <span onClick={() => setPageNumber(3)}>3</span>
        <span onClick={() => setPageNumber(4)}>4</span>
        <span onClick={() => setPageNumber(5)}>5</span>
      </div>
    </div>
  );
}

export default PaginationQuery;
