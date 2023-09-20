import storeProducts from "../../data/items.json";
import { StoreItem } from "../../components/StoreItem/StoreItem";
import { Title } from "../../components/Title/Title";
import { StoreContainer } from "./styles";
import { useState } from "react";
import { ProductCategories } from "../../components/ProductCategories/ProductCategories";

const productCategories = [
  "all",
  ...new Set(storeProducts.map((item) => item.category)),
];

export const Store = () => {
  const [productsMenu, setProductsMenu] = useState(storeProducts);

  const filterItems = (category: string) => {
    if (category === "all") {
      setProductsMenu(storeProducts);
      return;
    }
    const newItems = storeProducts.filter((item) => item.category === category);
    setProductsMenu(newItems);
  };
  return (
    <div>
      <Title title="Store" />
      <ProductCategories
        categories={productCategories}
        filterItems={filterItems}
      />
      <StoreContainer>
        {productsMenu.map((product) => {
          return <StoreItem key={product.id} {...product} />;
        })}
      </StoreContainer>
    </div>
  );
};
