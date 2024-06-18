import { useRef } from "react";
import {
  validateEmail,
  validateName,
  validateNumber,
  validateUrl,
} from "../../../utilities/validators";
import { Contacto } from "../Contacto";
import PropTypes from "prop-types";

const ContactsFormV1 = (props) => {
  const { contactos, setContactos } = props;

  const $inputNombre = useRef();
  const $inputNumero = useRef();
  const $inputEmail = useRef();
  const $inputImagen = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se hizo el submit");

    //1. Validacion
    if (
      !validateName($inputNombre.current) ||
      !validateNumber($inputNumero.current) ||
      !validateEmail($inputEmail.current) ||
      !validateUrl($inputImagen.current)
    ) {
      return;
    }

    //2. Obtencion de valores
    const nombre = $inputNombre.current.value;
    const numero = $inputNumero.current.value;
    const email = $inputEmail.current.value;
    const imagen = $inputImagen.current.value;

    //3. Crear contacto
    const nuevoContacto = new Contacto(nombre, numero, email, imagen);

    //4. Guardar en lista (que luego actualiza el LS)
    const nuevaLista = [...contactos, nuevoContacto];
    setContactos(nuevaLista);
    //localStorage.setItem("contactos", JSON.stringify([nuevoContacto]));
    //console.log(nombre, numero, email, imagen);

    //5. Mostrar mensaje de exito
    alert("Contacto guardado");

    //6. Reiniciar formulario
    e.target.reset();

    //7.Resetear clases
    $inputNombre.current.classList.remove("is-valid", "is-invalid");
    $inputNumero.current.classList.remove("is-valid", "is-invalid");
    $inputEmail.current.classList.remove("is-valid", "is-invalid");
    $inputImagen.current.classList.remove("is-valid", "is-invalid");
  };

  return (
    <form className="bg-white p-3 rounded text-dark" onSubmit={handleSubmit}>
      <fieldset className="mb-2">
        <label htmlFor="input-nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Juan Perez"
          id="input-nombre"
          className="form-control"
          ref={$inputNombre}
          required
          maxLength={40}
          minLength={3}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un nombre valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label htmlFor="input-numero" className="form-label">
          Numero
        </label>
        <input
          type="number"
          placeholder="381 123 4567"
          id="input-numero"
          className="form-control"
          ref={$inputNumero}
          required
          maxLength={10}
          minLength={10}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un numero valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="jperez@gmail.com"
          id="input-email"
          className="form-control"
          ref={$inputEmail}
          required
          maxLength={40}
          minLength={3}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un email valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label htmlFor="input-imagen" className="form-label">
          Email
        </label>
        <input
          type="imagen"
          placeholder="https://google.com"
          id="input-imagen"
          className="form-control"
          ref={$inputImagen}
          required
          minLength={3}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">
            Ingresa una imagen valida
          </span>
        </div>
      </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-danger" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
export default ContactsFormV1;

ContactsFormV1.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
