import { FC, ReactNode } from "react";

interface PaginationButtonProps {
  children: ReactNode;
  value: number;
  selectedIndex: number | null;
  onPaginationClick: (value: number) => void;
}

const PaginationButton: FC<PaginationButtonProps> = (props) => {
  const handleClick = () => {
    props.onPaginationClick(props.value);
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

export default PaginationButton;
