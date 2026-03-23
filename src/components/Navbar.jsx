// Importamos Link para navegar entre rutas
import { Link } from "react-router-dom";

// Importamos estilos del navbar
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__contenedor">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          AUREVIA
        </Link>

        {/* Menú principal */}
        <nav className="navbar__menu">
          <a href="#servicios" className="navbar__link">
            Services
          </a>

          <a href="#cobertura" className="navbar__link">
            Coverage
          </a>

          <a href="#como-funciona" className="navbar__link">
            How It Works
          </a>

          <a href="#sobre-nosotros" className="navbar__link">
            About Us
          </a>

          <a href="#faq" className="navbar__link">
            FAQ
          </a>

          <a href="#contacto" className="navbar__link">
            Contact
          </a>

          {/* Botón principal */}
          <Link to="/cotizador" className="navbar__boton">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;