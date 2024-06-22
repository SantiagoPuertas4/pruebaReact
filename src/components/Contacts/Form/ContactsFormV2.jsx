import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Contacto } from "../Contacto";

const ContactsFormV2 = (props) => {
  const { contactos, setContactos } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (datos) => {
    //Si llegamos aca ya esta todo validado y el e.preventDefault() realizado
    console.log(datos);
    console.log("Esta todo ok");

    //3. Crear contacto
    const nuevoContacto = new Contacto(
      datos.nombre,
      datos.numero,
      datos.email,
      datos.imagen
    );

    //4. Guardar en lista (que luego actualiza el LS)
    const nuevaLista = [...contactos, nuevoContacto];
    setContactos(nuevaLista);
    //localStorage.setItem("contactos", JSON.stringify([nuevoContacto]));
    //console.log(nombre, numero, email, imagen);

    //5. Mostrar mensaje de exito
    alert("Contacto guardado");

    //6. Resetear el form
    reset();
  };

  return (
    <form
      className="bg-white p-3 rounded text-dark"
      onSubmit={onSubmitRHF(handleSubmit)}
    >
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-nombre">
          Nombre
        </label>
        <input
          required
          className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
          id="input-nombre"
          maxLength={40}
          minLength={3}
          placeholder="Juan Perez"
          type="text"
          {...register("nombre", {
            required: "El campo nombre es requerido",
            maxLength: {
              value: 40,
              message: "El nombre no puede tener mas de 40 caracteres",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener mas de 3 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
              message: "El nombre debe tener unicamente siglas y espacios",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.nombre?.message}</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-numero">
          Numero
        </label>
        <input
          required
          className={`form-control ${errors.numero ? "is-invalid" : ""}`}
          id="input-numero"
          maxLength={10}
          minLength={8}
          placeholder="381 123 4567"
          type="number"
          {...register("numero", {
            required: "El campo numero es requerido",
            maxLength: {
              value: 10,
              message: "El numero no puede tener mas de 10 caracteres",
            },
            minLength: {
              value: 8,
              message: "El numero debe tener mas de 8 caracteres",
            },
            pattern: {
              value: /^\d{8,10}$/,
              message:
                "El campo numero debe indicar un numero telefonico valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.numero?.message}</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-email">
          Email
        </label>
        <input
          required
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          id="input-email"
          maxLength={50}
          minLength={3}
          placeholder="jperez@gmail.com"
          type="email"
          {...register("email", {
            required: "El campo email es requerido",
            maxLength: {
              value: 50,
              message: "El mail no puede tener mas de 50 caracteres",
            },
            minLength: {
              value: 3,
              message: "El mail debe tener mas de 3 caracteres",
            },
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Ingrese un email valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.email?.message}</span>
        </div>
      </fieldset>
      <fieldset className="mb-2">
        <label className="form-label" htmlFor="input-imagen">
          Email
        </label>
        <input
          required
          className={`form-control ${errors.imagen ? "is-invalid" : ""}`}
          id="input-imagen"
          minLength={3}
          placeholder="https://google.com"
          type="url"
          {...register("imagen", {
            required: "El campo imagen es requerido",
            minLength: {
              value: 3,
              message: "El campo imagen debe tener mas de 3 caracteres",
            },
            pattern: {
              value:
                /^\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/,
              message: "Ingrese una URL valida en el campo imagen",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.imagen?.message}</span>
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
export default ContactsFormV2;

ContactsFormV2.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
