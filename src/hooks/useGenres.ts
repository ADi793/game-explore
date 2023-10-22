import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    // @ts-ignore
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
