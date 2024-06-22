import PropTypes from "prop-types";
import ContactsRow from "./ContactsRow";
import "./ContactsRow.css";
import Swal from "sweetalert2";

const ContactsTable = (props) => {
  const { contactos, setContactos } = props;

  const deleteContact = (idContact, nombreContact) => {
    Swal.fire({
      title: "Atencion",
      html: `<p>Estas por eliminar el contacto de <b>${nombreContact}</b>. Esta accion es irreversible</p>`,
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, conservar",
      confirmButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        const nuevaLista = contactos.filter((c) => c.codigo !== idContact);
        setContactos(nuevaLista);
        Swal.fire({
          title: "Contacto eliminado exitosamente",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contact, index) => {
          return (
            <ContactsRow
              contact={contact}
              deleteContact={deleteContact}
              index={index}
              key={contact.codigo}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default ContactsTable;

ContactsTable.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
