import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score <= 90 ? 'blue' : score > 90 ? 'yellow' : '';

  return <Badge colorScheme={color} fontSize='15px' paddingX={2} borderRadius='10px'>{score}</Badge>;
};

export default CriticScore;
