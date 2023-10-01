import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px", marginTop: 1 },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px", marginTop: 2 },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px", marginTop: 1 },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
