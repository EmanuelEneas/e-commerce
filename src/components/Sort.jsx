import { useContext } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { productsContext } from "../context/ProductsContext";
import './Sort.css';

function Sort() {
  const { sortedMaxToMin, handleSort } = useContext(productsContext);

  return (
    <section className="sort-section">
      {sortedMaxToMin ? (
        <GoArrowUp 
          className="sort-icon active" 
          onClick={handleSort} 
          title="Ordenar de Mayor a Menor"
        />
      ) : (
        <GoArrowDown
          className="sort-icon" 
          onClick={handleSort} 
          title="Ordenar de Menor a Mayor"
        />
      )}
    </section>
  );
}

export default Sort;

