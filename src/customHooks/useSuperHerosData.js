import axios from "axios";
import { useQuery } from "react-query";

const onSuccess = (data) => {
  console.log("Data fetching success", data);
};
const onError = (error) => {
  console.log("Data fetching Error", error);
};

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3002/super-hero");
};

const useSuperHerosData = () => {
  return useQuery("super-heros", fetchSuperHeros, {
    cacheTime: 5000, // for cache validation time
    staleTime: 30000, // for background data refetch stop for 30 sec
    refetchOnMount: false, //for every time component is mount refetch data
    refetchOnWindowFocus: true, //for refetch data when change in server on when you focused in window
    refetchInterval: 900000, // automatic refetch after interval time
    refetchIntervalInBackground: true, //its continue refetch data when browser not in focus
    onSuccess: onSuccess, // its make side effect when success
    onError: onError, // its make side effect when error
    select: (data) => {
      // data transformation
      const superHeroNames = data.data.map((hero) => ({
        name: hero.name,
        id: hero.id,
      }));
      return superHeroNames;
    },
  });
};

export default useSuperHerosData;
