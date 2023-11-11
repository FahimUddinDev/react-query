import React from "react";
import { useQuery } from "react-query";
import Header from "../component/Header";
import axios from "axios";
import useSuperHerosData from "../customHooks/useSuperHerosData";
import { Link } from "react-router-dom";

function RQSuperHero() {
  const { isLoading, data, isError, error, isFetching } = useSuperHerosData();

  let content = null;

  if (isLoading || isFetching) {
    content = <h1>Loading....</h1>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (data) {
    content = data?.map((hero) => <Link to={hero.id}>{hero.name}</Link>);
  }
  return (
    <div>
      <Header />
      <div>
        <h2>RQSuperHero</h2>
        {content}
      </div>
    </div>
  );
}

export default RQSuperHero;
