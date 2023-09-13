import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import storeItems from "../../data/items.json";

export const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div>
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </>
  );
};
