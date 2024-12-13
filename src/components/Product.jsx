import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import "./Product.css";

function Product({ prod }) {
  const { addToCart } = useContext(productsContext);

  return (
    <div className="card">
      <h3>{prod.title}</h3>
      <div className="cardInnerContainer">
        <img src={prod.image} alt={prod.title} />
        <div className="card-price-btn">
          <p className="card-price">${prod.price}</p>
          <button className="card-btn" onClick={() => addToCart(prod)}>
            Add to Cart
          </button>
        </div>
      </div>
      <p className="card-description">
        {prod.description.slice(0, 40)}...
      </p>
    </div>
  );
}

export default Product;

