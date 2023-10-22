import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          objectFit="cover"
          w={{ base: "90px", lg: "60px" }}
          h={{ base: "60px", lg: "60px" }}
        ></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
