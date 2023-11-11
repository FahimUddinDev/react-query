import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addHero = (hero) => {
  return axios.post("http://localhost:3002/super-hero", hero);
};

export const useAddHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addHero, {
    onSuccess: (data) => {
      //   queryClient.invalidateQueries("super-heros"); // tag invalidation

      queryClient.setQueryData("super-heros", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        };
      });
    },
  });
};

export const useOptimisticAddHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addHero, {
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heros");
      const prevHeroData = queryClient.getQueryData("super-heros");
      queryClient.setQueryData("super-heros", (oldData) => {
        return {
          ...oldData,
          data: [
            ...oldData?.data,
            { id: oldData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        prevHeroData,
      };
    },
    onError: (error, hero, context) => {
      queryClient.setQueryData("super-heros", context.prevHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heros");
    },
  });
};
