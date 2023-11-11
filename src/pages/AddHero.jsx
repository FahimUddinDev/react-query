import React, { useState } from "react";
import Header from "../component/Header";
import useSuperHerosData from "../customHooks/useSuperHerosData";
import { Link } from "react-router-dom";
import { useAddHero, useOptimisticAddHero } from "../customHooks/useAddHero";

function AddHero() {
  const { isLoading, data, isError, error, isFetching } = useSuperHerosData();
  //   const { mutate } = useAddHero();
  const [name, setName] = useState("");
  const { mutate } = useOptimisticAddHero();
  const [altego, setAltego] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, altego, fansId: 2 });
  };

  let heros = null;

  if (isLoading || isFetching) {
    heros = <h1>Loading....</h1>;
  }

  if (isError) {
    heros = <h1>{error}</h1>;
  }
  if (data) {
    heros = data?.map((hero) => <Link to={hero.id}>{hero.name}</Link>);
  }
  return (
    <div>
      <Header />
      <h1>AddHero</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={altego}
          onChange={(e) => setAltego(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {heros}
    </div>
  );
}

export default AddHero;
