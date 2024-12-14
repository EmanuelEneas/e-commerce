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
  const { products, isLoading, error, maxPrice, query, cart } =
    useContext(productsContext);

  return (
    <>
      <Header>
        <Navbar />
        
        {/* Buscador y carrito */}
        <div className="search-container">
          <Search />
          <CartSummary />
        </div>

        <FilterByPrice />
      </Header>

      {/* Main content con productos */}
      <main className="products-container">
        {products.length > 0 ? (
          products
            .filter(
              (prod) =>
                prod.price <= maxPrice &&
                prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((prod) => <Product prod={prod} key={prod.id} />)
        ) : (
          <p className="no-products">No se encontraron productos</p>
        )}
      </main>

      <Sort />
    </>
  );
}

export default Products;
