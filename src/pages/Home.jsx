import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  const products = [
    {
      id: 1,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
      description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side/MONITOR CURVO PARA JUEGOS SÚPER ULTRA ANCHO 32:9 DE 49 PULGADAS con doble pantalla lateral de 27 pulgadas",
      price: "$999.99",
    },
    {
      id: 17,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      title: "Rain Jacket Women",
      description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design/Ligero perfecto para viajes o ropa casual---Manga larga con diseño de cintura con capucha y cordón ajustable",
      price:"$39.99"
    },
    {
      id: 3,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      title: "Mens Cotton Jacket",
      description: "jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/chaquetas para Primavera/Otoño/Invierno, adecuadas para muchas ocasiones, como trabajar, hacer senderismo, acampar, montaña",
      price: "$55.99",
    },
    {id: 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel/Pendientes de tapón túnel doble acampanado bañados en oro rosa. Fabricado en acero inoxidable 316L ",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          }
  ];

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>
        <h1>Best Selling Products/Productos Mas Vendidos</h1>
        <div className="container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <div className="price">{product.price}</div>
                
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;

