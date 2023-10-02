import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

export interface GameQuery {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={{ base: 3, lg: 0 }}>
            <GameHeading />
            <HStack gap={5} marginBottom={7}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
            <GameGrid />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
