import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cotizador from "./pages/Cotizador";
import "./styles/globales.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cotizador" element={<Cotizador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;