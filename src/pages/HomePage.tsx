import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

export interface GameQuery {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function Homepage() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
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

export default Homepage;
