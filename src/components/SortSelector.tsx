import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string | null;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((s) => s.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {Array.isArray(sortOrders) &&
          sortOrders.map((sortOrder) => (
            <MenuItem
              key={sortOrder.value}
              onClick={() => onSelectSortOrder(sortOrder.value)}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
