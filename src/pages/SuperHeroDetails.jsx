import React from "react";
import Header from "../component/Header";
import { Link, useParams } from "react-router-dom";
import useSuperHeroData from "../customHooks/useSuperHeroData";
import { useQueryClient } from "react-query";

function SuperHeroDetails() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error, isFetching } =
    useSuperHeroData(heroId);
  let content = null;

  const queryClient = useQueryClient();
  console.log(queryClient);
  if (isLoading || isFetching) {
    content = <h1>Loading....</h1>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  if (data) {
    content = <Link to={data.data.fanId}> {data.data.name}</Link>;
  }
  return (
    <div>
      <Header />
      <h3>SuperHeroDetails</h3>
      {content}
    </div>
  );
}

export default SuperHeroDetails;
