// Importamos herrmamientas de React Router para manejar las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando nuestras paginas y estilos globales
import Inicio from "./pages/Inicio";
import Cotizador from "./pages/Cotizador";
import "./styles/globales.css";

function App() {
  return (
    // BrowserRouter permite navegar entre paginas sin recargar el sitio
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Landing Page */}
        <Route path="/" element={<Inicio />} />

        {/* Ruta para el cotizador */}
        <Route path="/cotizador" element={<Cotizador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;