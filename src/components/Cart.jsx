import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { getDerivedCart } from "../utils/getDerivedCart";
import { Link } from "react-router-dom";
import styled from "styled-components";



const CartContainer = styled.article`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CartItem = styled.p`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-family: 'Monospace', sans-serif;
  font-size: 15px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Cart() {
  const { cart, removeFromCart } = useContext(productsContext);
  const derivedCart = getDerivedCart(cart);

  return (
    <CartContainer>
      {derivedCart.map((item) => (
        <CartItem key={item.id} onClick={() => removeFromCart(item.id)}>
          {item.name} - {item.quantity} - ${item.totalPrice}
        </CartItem>
      ))}
      <BackLink to={-1}>Back/Volver atras</BackLink>
    </CartContainer>
  );
}

export default Cart;

