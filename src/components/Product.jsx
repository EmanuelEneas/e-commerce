import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import "./Product.css";

function Product({ prod }) {
  const { addToCart } = useContext(productsContext);

  return (
    <div className="product-card">
      <h3 className="product-title">{prod.title}</h3>
      <div className="product-image-container">
        <img
          className="product-image"
          src={prod.image}
          alt={prod.title}
          loading="lazy"
        />
      </div>
      <div className="product-details">
        <p className="product-description">
          {prod.description.length > 40
            ? `${prod.description.slice(0, 40)}...`
            : prod.description}
        </p>
        <div className="product-price-btn">
          <p className="product-price">${prod.price.toFixed(2)}</p>
          <button
            className="product-btn"
            onClick={() => addToCart(prod)}
            aria-label={`Add ${prod.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
