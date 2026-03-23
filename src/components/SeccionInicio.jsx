// Importamos Link para mandar al usuario a la página del cotizador
import { Link } from "react-router-dom";

// Importamos estilos específicos de la sección de inicio
import "../styles/inicio.css";

function SeccionInicio() {
  return (
    // Esta es la primera sección grande del Home
    <section className="hero">
      <div className="contenedor hero__contenedor">
        {/* Bloque de texto principal */}
        <div className="hero__contenido">
          {/* Texto pequeño superior */}
          <p className="hero__etiqueta">PREMIUM COURIER SERVICE</p>

          {/* Título principal */}
          <h1 className="hero__titulo">
            Luxury Shipping
            <br />
            to Guatemala
          </h1>

          {/* Párrafo descriptivo */}
          <p className="hero__descripcion">
            Experience unparalleled premium courier services from anywhere in
            the world to Guatemala. Swift, secure, and sophisticated logistics
            for discerning clients.
          </p>

          {/* Botón principal */}
          <Link to="/cotizador" className="hero__boton">
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SeccionInicio;