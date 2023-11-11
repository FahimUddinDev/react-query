import React from "react";
import { useQuery } from "react-query";
import Header from "../component/Header";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3002/super-hero");
};

function SuperHerosShow() {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      enabled: false,
    }
  );

  let content = null;

  if (isLoading || isFetching) {
    content = <h1>Loading....</h1>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (data?.data) {
    content = data?.data?.map((hero) => <h6>{hero.name}</h6>);
  }
  return (
    <div>
      <Header />
      <div>
        <h2>Super Heros Show</h2>
        {content}
      </div>
      <button onClick={refetch}>Show</button>
    </div>
  );
}

export default SuperHerosShow;
