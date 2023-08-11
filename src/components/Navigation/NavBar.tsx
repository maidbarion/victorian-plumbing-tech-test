import { FC } from "react";
import NavButton from "./NavButton";
import { NavContainer } from "./NavBar.styled";

interface NavBarProps {
  onSortClick: (value: number) => void;
  selectedIndex: number | null;
}

const NavBar: FC<NavBarProps> = (props) => {
  return (
    <NavContainer>
      <div>Sort by: </div>
      <NavButton
        value={1}
        onSortClick={props.onSortClick}
        selectedIndex={props.selectedIndex}
      >
        Recommended
      </NavButton>
      <NavButton
        value={2}
        onSortClick={props.onSortClick}
        selectedIndex={props.selectedIndex}
      >
        Price Low to High
      </NavButton>
      <NavButton
        value={3}
        onSortClick={props.onSortClick}
        selectedIndex={props.selectedIndex}
      >
        Price High to Low
      </NavButton>
      <NavButton
        value={4}
        onSortClick={props.onSortClick}
        selectedIndex={props.selectedIndex}
      >
        Largest Discount
      </NavButton>
    </NavContainer>
  );
};

export default NavBar;
