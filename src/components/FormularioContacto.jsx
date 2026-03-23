// Importamos useState para manejar el estado del formulario
import { useState } from "react";

// Importamos estilos del formulario
import "../styles/formularios.css";

function FormularioContacto() {
  // Estado para guardar los valores del formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  // Estado para guardar errores
  const [errores, setErrores] = useState({});

  // Estado para mostrar mensaje de éxito
  const [enviado, setEnviado] = useState(false);

  // Número de WhatsApp al que se enviará el mensaje
  const numeroWhatsApp = "50254122045";

  // Función que actualiza los valores del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Función para validar campos
  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "Name is required.";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formulario.correo)) {
      nuevosErrores.correo = "Enter a valid email.";
    }

    if (!formulario.telefono.trim()) {
      nuevosErrores.telefono = "Phone number is required.";
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = "Message is required.";
    }

    return nuevosErrores;
  };

  // Función que se ejecuta al enviar el formulario
  const manejarSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = validarFormulario();
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false);
      return;
    }

    // Armamos el mensaje que se enviará por WhatsApp
    const mensaje =
      `Hola, quiero más información sobre sus servicios de courier.\n\n` +
      `Nombre: ${formulario.nombre}\n` +
      `Correo: ${formulario.correo}\n` +
      `Teléfono: ${formulario.telefono}\n` +
      `Mensaje: ${formulario.mensaje}`;

    // Creamos el enlace de WhatsApp con el número y el mensaje
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Marcamos visualmente que todo salió bien
    setEnviado(true);

    // Abrimos WhatsApp en una pestaña nueva
    window.open(enlaceWhatsApp, "_blank");

    // Limpiamos el formulario
    setFormulario({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <form className="formulario-contacto" onSubmit={manejarSubmit}>
      <div className="formulario__grupo">
        <label htmlFor="nombre">FULL NAME</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="John Doe"
          value={formulario.nombre}
          onChange={manejarCambio}
        />
        {errores.nombre && (
          <p className="formulario__error">{errores.nombre}</p>
        )}
      </div>

      <div className="formulario__grupo">
        <label htmlFor="correo">EMAIL ADDRESS</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="john@example.com"
          value={formulario.correo}
          onChange={manejarCambio}
        />
        {errores.correo && (
          <p className="formulario__error">{errores.correo}</p>
        )}
      </div>

      <div className="formulario__grupo">
        <label htmlFor="telefono">PHONE NUMBER</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          placeholder="+502 1234 5678"
          value={formulario.telefono}
          onChange={manejarCambio}
        />
        {errores.telefono && (
          <p className="formulario__error">{errores.telefono}</p>
        )}
      </div>

      <div className="formulario__grupo">
        <label htmlFor="mensaje">MESSAGE</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          placeholder="Tell us about your shipping requirements..."
          value={formulario.mensaje}
          onChange={manejarCambio}
        ></textarea>
        {errores.mensaje && (
          <p className="formulario__error">{errores.mensaje}</p>
        )}
      </div>

      <button type="submit" className="formulario__boton">
        SEND VIA WHATSAPP
      </button>

      {enviado && (
        <p className="formulario__exito">
          Your message was prepared and WhatsApp was opened successfully.
        </p>
      )}
    </form>
  );
}

export default FormularioContacto;