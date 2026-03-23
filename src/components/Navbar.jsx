// Importamos Link para navegar entre rutas
import { Link } from "react-router-dom";

// Importamos estilos del navbar
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__contenedor">
        {/* Nombre/logo del sitio */}
        <Link to="/" className="navbar__logo">
          AUREVIA
        </Link>

        {/* Menú principal */}
        <nav className="navbar__menu">
          {/* Estos enlaces llevan a secciones dentro de Inicio */}
          <a href="#servicios" className="navbar__link">
            Services
          </a>
          <a href="#cobertura" className="navbar__link">
            Coverage
          </a>
          <a href="#como-funciona" className="navbar__link">
            Cómo Funciona
          </a>
          <a href="#sobre-nosotros" className="navbar__link">
            Sobre Nosotros
          </a>

          {/* Este botón nos manda a la página Cotizador */}
          <Link to="/cotizador" className="navbar__boton">
            Cotizador
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;