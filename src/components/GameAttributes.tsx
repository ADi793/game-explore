import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {Array.isArray(game.parent_platforms) &&
          game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={90} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {Array.isArray(game.genres) &&
          game.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {Array.isArray(game.publishers) &&
          game.publishers.map((publisher) => <Text>{publisher.name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
