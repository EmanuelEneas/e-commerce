import React from "react";

function Header({ children }) {
  return (
    <header style={{ 
      height: "115px", 
      backgroundColor: "#f8f9fa", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <h1 style={{ 
  textAlign: "center", 
  color: "#343a40", 
  margin: "20px 0", 
  fontSize: "3rem", 
  fontFamily: "'Roboto', sans-serif", 
  fontWeight: "bold", 
  textTransform: "uppercase", 
  letterSpacing: "2px", 
  background: "linear-gradient(90deg, rgba(255, 0, 150, 0.5), rgba(0, 204, 255, 0.5))", 
  WebkitBackgroundClip: "text", 
  WebkitTextFillColor: "transparent"
}}>
  Emanuel Caceres
</h1>

      {children}
    </header>
  );
}

export default Header;
