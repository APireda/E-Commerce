import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 70px;
`;

export const StyledLink = styled(Link)`
  margin: 0 20px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    text-decoration: underline;
  }
`;

export const CartIcon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartIconQuantity = styled.div`
  position: absolute;
  top: 2.25rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  opacity: 0.8;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
