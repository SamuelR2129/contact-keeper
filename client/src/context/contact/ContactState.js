import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "sam reedy",
        email: "sam.reedy@hotmail.com",
        phone: "1111 111 1111",
        type: "personal",
      },
      {
        id: 2,
        name: "jac ",
        email: "jac.reedy@hotmail.com",
        phone: "3111 111 1111",
        type: "personal",
      },
      {
        id: 3,
        name: "foo ",
        email: "foo.reedy@hotmail.com",
        phone: "3111 111 1111",
        type: "professional",
      },
    ],
  };
  debugger;
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  //delete contact

  //set current contact

  //clear current contact

  //update current contact

  //filter contacts

  //clear filter
  console.log("contacts from usereducer: ", { state });
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
