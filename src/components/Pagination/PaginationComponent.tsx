import { FC } from "react";
import { PaginationContainer } from "./PaginationComponent.styles";
import PaginationButton from "./PaginationButton";

interface PaginationComponentProps {
  data: any;
  selectedIndex: number | null;
  pageSize: number;
  onPaginationClick: (value: number) => void;
}

const PaginationComponent: FC<PaginationComponentProps> = (props) => {
  const totalPageCount = Math.ceil((props.data?.total || 0) / props.pageSize);

  return (
    <div>
      {totalPageCount ? (
        <PaginationContainer>
          <div>Page Number: </div>
          {Array.from(Array(totalPageCount), (_, index) => (
            <PaginationButton
              key={index}
              onPaginationClick={props.onPaginationClick}
              value={index + 1}
              selectedIndex={props.selectedIndex}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </PaginationContainer>
      ) : null}
    </div>
  );
};

export default PaginationComponent;
