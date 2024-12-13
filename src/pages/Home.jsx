import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [showVideo, setShowVideo] = useState(true);

  const products = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      title: "Samsung 49-Inch Monitor",
      description: "Monitor ultrapanorámico con tecnología QLED"
    },
    {
      id: 17,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      title: "Rain Jacket Women",
      description: "Chaqueta ligera y elegante"
    },
    {
      id: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "Mens Cotton Jacket",
      description: "Chaqueta de algodón para todas las estaciones"
    }
  ];

  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <main>
        {/* Video Futurista separado */}
        {showVideo && (
          <div className="video-section">
            <video className="product-video" autoPlay loop muted controls>
              <source src="/videos/ema2.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        )}

        {/* Sección de Productos Destacados */}
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;

