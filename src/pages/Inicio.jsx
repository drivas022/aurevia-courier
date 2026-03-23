// Importamos el navbar y footer para usarlos en la landing page
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Importamos las secciones del Home
import SeccionInicio from "../components/SeccionInicio";
import SeccionServicios from "../components/SeccionServicios";
import SeccionCobertura from "../components/SeccionCobertura";
import SeccionComoFunciona from "../components/SeccionComoFunciona";
import SeccionSobreNosotros from "../components/SeccionSobreNosotros";
import SeccionFAQ from "../components/SeccionFAQ";
import SeccionContacto from "../components/SeccionContacto";

function Inicio() {
  return (
    <>
      {/* Barra de navegación superior */}
      <Navbar />
      {/* Hero principal */}
      <SeccionInicio />
      {/* Servicios */}
      <SeccionServicios />
      {/* Cobertura */}
      <SeccionCobertura />
      {/* Cómo funciona */}
      <SeccionComoFunciona />
      {/* Sobre nosotros */}
      <SeccionSobreNosotros />
      {/* FAQ */}
      <SeccionFAQ />
      {/* Contacto */}
      <SeccionContacto />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Inicio;