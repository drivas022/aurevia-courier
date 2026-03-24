// Importamos Link y hooks de React Router
import { Link, useLocation, useNavigate } from "react-router-dom";

// Importamos estilos del navbar
import "../styles/navbar.css";

function Navbar() {
  // Hook para saber en qué ruta estamos
  const location = useLocation();

  // Hook para navegar entre páginas
  const navigate = useNavigate();

  // Función para ir a una sección del Home
  const irASeccion = (idSeccion) => {
    if (location.pathname === "/") {
      const seccion = document.getElementById(idSeccion);

      if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${idSeccion}`);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__contenedor">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          AeroPAQ
        </Link>

        {/* Menú */}
        <nav className="navbar__menu">
          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("servicios")}
          >
            Services
          </button>

          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("cobertura")}
          >
            Coverage
          </button>

          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("como-funciona")}
          >
            How It Works
          </button>

          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("sobre-nosotros")}
          >
            About Us
          </button>

          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("faq")}
          >
            FAQ
          </button>

          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={() => irASeccion("contacto")}
          >
            Contact
          </button>

          {/* Botón negro */}
          <Link to="/cotizador" className="navbar__boton">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;