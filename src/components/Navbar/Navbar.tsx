import { Nav, StyledLink, CartIcon, CartIconQuantity } from "./styles";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <Nav>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/store">Store</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </div>
      <Link to="/cart">
        <CartIcon>
          <ShoppingCart size={32} color="white" />
          {cartQuantity > 0 && (
            <CartIconQuantity>{cartQuantity}</CartIconQuantity>
          )}
        </CartIcon>
      </Link>
    </Nav>
  );
};
