import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const GameTrailer = ({ gameId }: Props) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
