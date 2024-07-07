import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";

function FilterByPrice() {
  const { maxPrice, handleMaxPrice } = useContext(productsContext);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "0" }}>
      <input
        style={{
          accentColor: "#007BFF",
          background: "linear-gradient(to right, #007BFF, #00FF7F)",
          appearance: "none",
          width: "100%",
          height: "8px",
          borderRadius: "5px",
          outline: "none",
          opacity: "0.8",
          transition: "opacity 0.2s",
          cursor: "pointer",
        }}
        type="range"
        name="maxPrice"
        id="maxPrice"
        min={0}
        max={1000}
        step={5}
        defaultValue={1000}
        onChange={(e) => handleMaxPrice(Number(e.target.value))}
      />
      <p style={{
  textAlign: "left", 
  margin: "10px 0", 
  fontFamily: "'Courier New', monospace", 
  fontSize: "20px",
  color: "#333", 
  backgroundColor: "#f0f0f0", 
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
}}>
  Top price/filtrar precio ${maxPrice}
</p>

    </div>
  );
}

export default FilterByPrice;
