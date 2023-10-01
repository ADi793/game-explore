import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  name: string;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
