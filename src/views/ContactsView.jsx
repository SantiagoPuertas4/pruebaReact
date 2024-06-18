import { useState } from "react";
import ContactsFormV1 from "../components/Contacts/Form/ContactsFormV1";
const contactosLS = JSON.parse(localStorage.getItem("contactos")) || [];

const ContactsView = () => {
  //const contactos = JSON.parse(localStorage.getItem("contactos")) || [];

  const [contactos, setContactos] = useState(contactosLS);

  return (
    <>
      <h1>Cargar contacto</h1>
      <hr />
      <ContactsFormV1 contactos={contactos} setContactos={setContactos} />
      {JSON.stringify(contactos)}
      {/* Tabla */}
    </>
  );
};
export default ContactsView;
