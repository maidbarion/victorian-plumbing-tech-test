import { FC, ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  value: number;
  selectedIndex: number | null;
  onSortClick: (value: number) => void;
}

const NavButton: FC<NavButtonProps> = (props) => {
  const handleClick = () => {
    props.onSortClick(props.value);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      {props.selectedIndex === props.value ? (
        <div onClick={handleClick}>
          <b>{props.children}</b>
        </div>
      ) : (
        <div onClick={handleClick}>{props.children}</div>
      )}
    </div>
  );
};

export default NavButton;
