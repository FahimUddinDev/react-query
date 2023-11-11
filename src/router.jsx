import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import SuperHero from "./pages/SuperHero";
import RQSuperHero from "./pages/RQSuperHero";
import SuperHerosShow from "./pages/SuperHerosShow";
import SuperHeroDetails from "./pages/SuperHeroDetails";
import ParallelQuries from "./pages/ParallelQuries";
import DaynamicParallel from "./pages/DaynamicParallel";
import DefendentQuery from "./pages/DefendentQuery";
import PaginationQuery from "./pages/PaginationQuery";
import InfinityQuery from "./pages/InfinityQuery";
import AddHero from "./pages/AddHero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/super-heros",
    element: <SuperHero />,
  },
  {
    path: "/rq-super-heros",
    element: <RQSuperHero />,
  },
  {
    path: "/super-heros-show",
    element: <SuperHerosShow />,
  },
  {
    path: "/rq-super-heros/:heroId",
    element: <SuperHeroDetails />,
  },
  {
    path: "/parallel",
    element: <ParallelQuries />,
  },
  {
    path: "/rq-super-heros/:heroId/:friends",
    element: <DaynamicParallel />,
  },
  {
    path: "/dependent",
    element: <DefendentQuery id={3} />,
  },
  {
    path: "/pagination",
    element: <PaginationQuery />,
  },
  {
    path: "/infinity-query",
    element: <InfinityQuery />,
  },
  {
    path: "/add-hero",
    element: <AddHero />,
  },
]);

const Router = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export default Router;
