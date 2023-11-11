import React from "react";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQueries } from "react-query";

function DaynamicParallel() {
  const { friends, heroId } = useParams();
  const quriesParams = [friends, heroId];
  const fetchData = (id) => {
    let url = null;
    if (id === friends) {
      url = "http://localhost:3002/friends";
    } else {
      url = "http://localhost:3002/super-hero";
    }
    return axios.get(`${url}/${id}`);
  };
  const queryResult = useQueries(
    quriesParams.map((id) => {
      return {
        queryKey: ["super", id],
        queryFn: () => fetchData(id),
      };
    })
  );
  const [fans, superHero] = queryResult;
  console.log(superHero?.data?.data);
  return (
    <div>
      <Header />
      <h1>DaynamicParallel</h1>
      <h4>Super Hero</h4>
      {superHero?.data?.data?.name} fans {fans?.data?.data?.name}
    </div>
  );
}

export default DaynamicParallel;
