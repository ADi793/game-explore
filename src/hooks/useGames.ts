import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";

export interface Game {
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  name: string;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
