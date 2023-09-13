import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "../../components/ShoppingCart/CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import { Title } from "../../components/Title/Title";
import storeItems from "../../data/items.json";
import { CartContainer } from "./styles";

export const ShoppingCart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();

  const CartQuantity = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <Title title="Cart" />
      {cartQuantity > 0 ? (
        <CartContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <hr />
          <div style={{ margin: "1rem" }}>
            Total {formatCurrency(CartQuantity)}
          </div>
        </CartContainer>
      ) : (
        <CartContainer>
          <h2>Your cart is empty</h2>
        </CartContainer>
      )}
    </>
  );
};
