import storeProducts from "../../data/items.json";
import { StoreItem } from "../../components/StoreItem/StoreItem";
import { Title } from "../../components/Title/Title";
import { StoreContainer } from "./styles";

export const Store = () => {
  return (
    <div>
      <Title title="Store" />
      <StoreContainer>
        {storeProducts.map((product) => (
          <StoreItem key={product.id} {...product} />
        ))}
      </StoreContainer>
    </div>
  );
};
