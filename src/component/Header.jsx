import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/super-heros">Super Heros</Link>
      <Link to="/rq-super-heros">RQ Super Heros</Link>
      <Link to="/super-heros-show">Super Heros Show</Link>
      <Link to="/parallel">Parallel Quires</Link>
      <Link to="/dependent">Dependent Quires</Link>
      <Link to="/pagination">Pagination Quires</Link>
      <Link to="/infinity-query">Pagination Quires</Link>
      <Link to="/add-hero">Add Hero</Link>
    </div>
  );
}

export default Header;
