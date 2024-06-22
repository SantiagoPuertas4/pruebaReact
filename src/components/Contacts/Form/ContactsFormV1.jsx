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
        <label className="form-label" htmlFor="input-nombre">
          Nombre
        </label>
        <input
          required
          className="form-control"
          id="input-nombre"
          maxLength={40}
          minLength={3}
          placeholder="Juan Perez"
          ref={$inputNombre}
          type="text"
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un nombre valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-numero">
          Numero
        </label>
        <input
          required
          className="form-control"
          id="input-numero"
          maxLength={10}
          minLength={10}
          placeholder="381 123 4567"
          ref={$inputNumero}
          type="number"
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un numero valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-email">
          Email
        </label>
        <input
          required
          className="form-control"
          id="input-email"
          maxLength={40}
          minLength={3}
          placeholder="jperez@gmail.com"
          ref={$inputEmail}
          type="email"
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">Ingresa un email valido</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-imagen">
          Email
        </label>
        <input
          required
          className="form-control"
          id="input-imagen"
          minLength={3}
          placeholder="https://google.com"
          ref={$inputImagen}
          type="imagen"
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
