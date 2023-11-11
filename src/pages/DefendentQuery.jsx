import React from "react";
import Header from "../component/Header";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:3002/super-hero/${id}`);
};

const fetchFan = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:3002/friends/${id}`);
};

function DefendentQuery({ id }) {
  const { data: superHero } = useQuery(["super hero", id], fetchSuperHero);
  const fansId = superHero?.data?.fanId;
  const { data: fan } = useQuery(["fan", fansId], fetchFan, {
    enabled: !!fansId,
  });
  return (
    <div>
      <Header />
      {fan?.data?.name}
      <h1>DefendentQuery</h1>
    </div>
  );
}

export default DefendentQuery;
