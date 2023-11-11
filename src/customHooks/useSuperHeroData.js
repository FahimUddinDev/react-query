import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const onSuccess = (data) => {
  console.log("Data fetching success", data);
};
const onError = (error) => {
  console.log("Data fetching Error", error);
};

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:3002/super-hero/${heroId}`);
};

const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-heros", heroId], fetchSuperHero, {
    onSuccess: onSuccess, // its make side effect when success
    onError: onError, // its make side effect when error
    initialData: () => {
      const hero = queryClient
        .getQueriesData("super-heros")[0][1]
        ?.data?.find((hero) => hero.id === heroId);
      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};

export default useSuperHeroData;
