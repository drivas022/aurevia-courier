import { useState } from "react";
import "../styles/formularios.css";

function FormularioContacto() {
  // Estado principal del formulario: aquí se guardan los valores escritos por el usuario
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  // Estado para guardar errores de validación por campo
  const [errores, setErrores] = useState({});

  // Indica si el formulario fue enviado correctamente
  const [enviado, setEnviado] = useState(false);

  // Indica si la solicitud está en proceso para deshabilitar el botón mientras se envía
  const [cargando, setCargando] = useState(false);

  // Guarda un posible error general al intentar enviar el formulario
  const [errorEnvio, setErrorEnvio] = useState("");

  // URL del Google Apps Script que recibe los datos y los guarda en Google Sheets
  const URL_GOOGLE_SCRIPT =
    "https://script.google.com/macros/s/AKfycbxwhM7DWTGyzEdfrczVK34qCZ5Y1re7agcapuNEqW7Q7pLkBImHe4Pbhf68EfFcAgb9/exec";

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    // Actualiza dinámicamente el valor del campo que el usuario está escribiendo
    setFormulario({
      ...formulario,
      [name]: value,
    });

    // Limpia el error de ese campo específico cuando el usuario vuelve a escribir
    setErrores({
      ...errores,
      [name]: "",
    });

    // Reinicia mensajes de estado al detectar cambios nuevos en el formulario
    setEnviado(false);
    setErrorEnvio("");
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validación del nombre
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "Name is required.";
    } else if (formulario.nombre.trim().length < 3) {
      nuevosErrores.nombre = "Enter a valid name.";
    }

    // Validación del correo con expresión regular básica
    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      nuevosErrores.correo = "Enter a valid email.";
    }

    // Validación del teléfono permitiendo números, espacios, guiones y signo +
    if (!formulario.telefono.trim()) {
      nuevosErrores.telefono = "Phone number is required.";
    } else if (!/^[+0-9\s-]{8,20}$/.test(formulario.telefono)) {
      nuevosErrores.telefono = "Enter a valid phone number.";
    }

    // Validación del mensaje con longitud mínima
    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = "Message is required.";
    } else if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "Message must be at least 10 characters.";
    }

    // Retorna el objeto con todos los errores encontrados
    return nuevosErrores;
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();

    // Primero se valida todo el formulario antes de intentar enviarlo
    const nuevosErrores = validarFormulario();
    setErrores(nuevosErrores);
    setEnviado(false);
    setErrorEnvio("");

    // Si existen errores, se detiene el envío
    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    // Activa el estado de carga mientras se realiza la petición
    setCargando(true);

    try {
      // Envía los datos al Google Apps Script en formato JSON
      const respuesta = await fetch(URL_GOOGLE_SCRIPT, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nombre: formulario.nombre.trim(),
          correo: formulario.correo.trim(),
          telefono: formulario.telefono.trim(),
          mensaje: formulario.mensaje.trim(),
        }),
      });

      // Lee la respuesta como texto
      const texto = await respuesta.text();

      // Si la respuesta HTTP no fue correcta, lanza error
      if (!respuesta.ok) {
        throw new Error("The form could not be submitted.");
      }

      let data = {};
      try {
        // Intenta convertir la respuesta a JSON
        data = JSON.parse(texto);
      } catch {
        // Si no viene JSON válido, se asume éxito para no romper el flujo
        data = { result: "success" };
      }

      // Si el Apps Script responde algo distinto de success, lanza error
      if (data.result !== "success") {
        throw new Error(data.message || "The form could not be submitted.");
      }

      // Si todo salió bien, muestra mensaje de éxito y limpia el formulario
      setEnviado(true);
      setFormulario({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
      });
      setErrores({});
    } catch (error) {
      // Si algo falla, muestra un mensaje general de error
      setErrorEnvio("There was an error submitting the form. Please try again.");
    } finally {
      // Quita el estado de carga sin importar si salió bien o mal
      setCargando(false);
    }
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

      <button type="submit" className="formulario__boton" disabled={cargando}>
        {cargando ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {/* Mensaje que aparece cuando el formulario se envía correctamente */}
      {enviado && (
        <p className="formulario__exito">
          Your message was sent successfully.
        </p>
      )}

      {/* Mensaje general de error si falla el envío */}
      {errorEnvio && <p className="formulario__error">{errorEnvio}</p>}
    </form>
  );
}

export default FormularioContacto;