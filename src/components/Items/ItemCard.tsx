import { FC } from "react";
import { CardContainer } from "./ItemCard.styled";

interface ItemCardProps {
  title: string;
  image: string;
  price: number;
}

const ItemCard: FC<ItemCardProps> = (props: ItemCardProps) => {
  return (
    <CardContainer>
      <div>{props.title}</div>
      <img width="150px" alt={props.title} src={props.image} />
      <div>{`£${props.price} including tax`}</div>
    </CardContainer>
  );
};

export default ItemCard;
