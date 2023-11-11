import React from "react";
import Header from "../component/Header";
import axios from "axios";
import { useQuery } from "react-query";

function ParallelQuries() {
  const fetchSuperHeros = () => axios.get("http://localhost:3002/super-hero");
  const fetchFriends = () => axios.get("http://localhost:3002/friends");

  const { data: superHeros } = useQuery("super-heros", fetchSuperHeros);
  const { data: friends } = useQuery("frends", fetchFriends);
  return (
    <div>
      <Header />
      <h1>ParallelQuries</h1>
      <h4>Super Heros</h4>
      {superHeros?.data?.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
      <h4>Friends</h4>
      {friends?.data?.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
}

export default ParallelQuries;
