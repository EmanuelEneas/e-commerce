import React, { useContext } from "react";
import Product from "../components/Product";
import "./Products.css";

import { productsContext } from "../context/ProductsContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sort from "../components/Sort";
import FilterByPrice from "../components/FilterByPrice";
import Search from "../components/Search";
import CartSummary from "../components/CartSummary";

function Products() {
  const { products, isLoading, error, maxPrice, query } =
    useContext(productsContext);

  const filteredProducts = products.filter(
    (prod) =>
      prod.price <= maxPrice &&
      prod.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header>
        <Navbar />

        <div className="search-container">
          <Search />
          <CartSummary />
        </div>

        <FilterByPrice />
      </Header>

      <main className="products-container">
        {isLoading ? (
          <div className="loading-spinner">Cargando productos...</div>
        ) : error ? (
          <div className="error-message">Error: {error}</div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => <Product prod={prod} key={prod.id} />)
        ) : (
          <div className="empty-cart-message">No se encontraron productos 🛒</div>
        )}
      </main>

      <Sort />
    </>
  );
}

export default Products;

