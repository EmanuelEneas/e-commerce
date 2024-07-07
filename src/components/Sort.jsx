import { useContext } from "react";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { productsContext } from "../context/ProductsContext";
function Sort() {
  const { sortedMaxToMin, handleSort } = useContext(productsContext);
  return (
    <section>
      {sortedMaxToMin ? (
        <BsSortNumericDown
          style={{ fontSize: "2rem", cursor: "pointer",color:"#490196" }}
          onClick={handleSort}
        />
      ) : (
        <BsSortNumericDownAlt
          style={{ fontSize: "2rem", cursor: "pointer",color:"#C60087" }}
          onClick={handleSort}
        />
      )}
    </section>
  );
}

export default Sort;
