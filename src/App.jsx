// Importamos las librerías necesarias
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

// Definimos los colores de la paleta
const colors = {
  primary: "#2c3e4e",
  secondary: "#72829d",
  tertiary: "#b1bac4",
  quaternary: "#dadde2",
  quinary: "#f3f4f6"
};

// Definimos un componente de producto
function Product({ product }) {
  return (
    <div className="card" style={{backgroundColor: colors.quaternary, color: colors.primary}}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary" style={{backgroundColor: colors.secondary, borderColor: colors.secondary}}>Ver más</a>
      </div>
    </div>
  );
}

// Definimos el componente del catálogo
function Catalog({ products }) {
  return (
    <div className="container mx-auto py-10" style={{backgroundColor: colors.quinary}}>
      <h1 className="text-center mb-10 animate-fadeIn" style={{color: colors.primary}}>Catálogo de productos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


// Definimos la sección de contacto
function Contact() {
  return (
    <div className="container mx-auto py-10" style={{backgroundColor: colors.quinary}}>
      <h1 className="text-center mb-10" style={{color: colors.primary}}>Contacto</h1>
      {/* Aquí puedes agregar un formulario de contacto o información de contacto */}
    </div>
  );
}

// Definimos la sección de "Quiénes somos"
function About() {
  return (
    <div className="container mx-auto py-10" style={{backgroundColor: colors.quinary}}>
      <h1 className="text-center mb-10" style={{color: colors.primary}}>Quiénes somos</h1>
      {/* Aquí puedes agregar información sobre tu empresa */}
    </div>
  );
}

function StarRating({ rating }) {
  // Renderizamos las estrellas llenas, las vacías y las medias
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div>
      {'⭐'.repeat(fullStars)}
      {'⭐'.repeat(halfStars)}
      {'⭐'.repeat(emptyStars)}
    </div>
  );
}

function Review({ review }) {
  return (
    <div style={{backgroundColor: colors.quaternary, color: colors.primary}}>
      <h5>{review.reviewer}</h5>
      <StarRating rating={review.rating} />
      <p>{review.comment}</p>
    </div>
  );
}


// Definimos la aplicación principal
// Definimos la sección de reseñas
function Reviews({ reviews }) {
  return (
    <div className="container mx-auto py-10" style={{backgroundColor: colors.quinary}}>
      <h1 className="text-center mb-10" style={{color: colors.primary}}>Reseñas de productos</h1>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

// Definimos la aplicación principal
function App() {
  // Aquí puedes insertar tus productos y reseñas desde una base de datos o API
  const products = [
    // Ejemplo de producto
    { id: 1, name: 'Producto 1', description: 'Este es el producto 1', image: 'url_de_la_imagen' },
    // Añade más productos aquí...
  ];

  const reviews = [
    // Ejemplo de reseña
    { id: 1, reviewer: 'Juan', rating: 4.5, comment: 'Este producto es excelente!' },
    // Añade más reseñas aquí...
  ];

  return (
    <div className="App">
      <header style={{backgroundColor: colors.primary, color: colors.quinary}}>
        <h1 className="text-center p-4">Desumex</h1>
        <nav className="text-center pb-4">
          <a href="#about" style={{color: colors.quinary}}>Quiénes somos</a> | 
          <a href="#products" style={{color: colors.quinary}}>Productos</a> | 
          <a href="#reviews" style={{color: colors.quinary}}>Reseñas</a> | 
          <a href="#contact" style={{color: colors.quinary}}>Contacto</a>
        </nav>
      </header>
      <About id="about" />
      <Catalog id="products" products={products} />
      <Reviews id="reviews" reviews={reviews} />
      <Contact id="contact" />
    </div>
  );
}


export default App;
