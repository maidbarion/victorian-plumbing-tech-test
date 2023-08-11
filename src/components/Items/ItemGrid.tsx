import { FC } from "react";
import { ItemContainer } from "./ItemGrid.styled";
import ItemCard from "./ItemCard";

interface Item {
  productName: string;
  image: {
    url: string;
  };
  price: {
    priceIncTax: number;
  };
}

interface ItemGridProps {
  data: Item[];
  onSortClick: (value: number) => void;
}

const ItemGrid: FC<ItemGridProps> = (props) => {
  return (
    <ItemContainer>
      {props.data.map((item, index) => (
        <ItemCard
          key={index}
          title={item.productName}
          image={item.image.url}
          price={item.price.priceIncTax}
        />
      ))}
    </ItemContainer>
  );
};

export default ItemGrid;
