import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  console.log("contactContext", contactContext);
  debugger;
  const { contacts } = contactContext;
  console.log("contacts from contactContext: ", contacts);
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;
