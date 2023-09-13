import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import storeItems from "../../data/items.json";
import { CaretRight, CaretLeft } from "phosphor-react";
import { IconButton } from "../Buttons/IconButton";
import { RemoveButton } from "../Buttons/RemoveButton";
import { Flex, ProductPrice, ProductQuantity } from "./styles";

interface CartItemProps {
  id: number;
  quantity: number;
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Flex>
      <div>
        <div>
          <p>
            {item.name} {quantity > 1 && <span>x{quantity}</span>}
          </p>
        </div>
        <ProductPrice>{formatCurrency(item.price)}</ProductPrice>
      </div>
      <ProductQuantity>
        <div>
          {" "}
          <IconButton
            handleClick={() => decreaseCartQuantity(id)}
            icon={<CaretLeft />}
          />
          {formatCurrency(item.price * quantity)}
          <IconButton
            handleClick={() => increaseCartQuantity(id)}
            icon={<CaretRight />}
          />
        </div>
        <RemoveButton handleClick={() => removeFromCart(id)} label="Remove" />
      </ProductQuantity>
    </Flex>
  );
};
