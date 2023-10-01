import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={colorScheme}
      fontSize="14px"
      paddingX={2}
      borderRadius={4}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
