import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import './Search.css'
function Search() {
  const { query, handleQuery } = useContext(productsContext);

  return (
    <div className="search-container">
    <form className="search-form">
      <label className="search-label" htmlFor="searchTerm">Search/Buscador</label>
      <input
        className="search-input"
        type="search"
        id="searchTerm"
        placeholder="samsung,pierced,lock..."
        onChange={(e) => handleQuery(e.target.value)}
      />
    </form>
  </div>
);
}

export default Search;