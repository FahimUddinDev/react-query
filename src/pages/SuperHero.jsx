import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import axios from "axios";

const Loading = () => <div>Loading .....</div>;

function SuperHero() {
  const [data, setData] = useState();
  const getData = async () => {
    await axios
      .get("http://localhost:3002/super-hero")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      <div>SuperHero</div>
      {data ? (
        data.map((hero) => <div key={hero.id}>{hero.name}</div>)
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SuperHero;
