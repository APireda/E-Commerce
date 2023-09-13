import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CaretRight, CaretLeft } from "phosphor-react";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { IconButton } from "../Buttons/IconButton";
import { RemoveButton } from "../Buttons/RemoveButton";
import { ProductCard } from "./styles";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
}

export const StoreItem = ({ id, name, price }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>{formatCurrency(price)}</p>
      <div>
        {quantity === 0 ? (
          <PrimaryButton
            handleClick={() => increaseCartQuantity(id)}
            label="Add to Cart"
          />
        ) : (
          <div>
            <div>
              <IconButton
                handleClick={() => decreaseCartQuantity(id)}
                icon={<CaretLeft />}
              />
              <span>{quantity} in cart</span>
              <IconButton
                handleClick={() => increaseCartQuantity(id)}
                icon={<CaretRight />}
              />
            </div>
            <RemoveButton
              handleClick={() => removeFromCart(id)}
              label="Remove"
            />
          </div>
        )}
      </div>
    </ProductCard>
  );
};
