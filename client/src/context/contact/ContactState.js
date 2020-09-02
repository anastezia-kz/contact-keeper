import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Harry Potter',
        email: 'HP@gmai.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Hermione Graindger',
        email: 'HG@gmai.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Ron Wisley ',
        email: 'RW@gmai.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete contact

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = contact => {
    dispatch({ type:SET_CURRENT, payload: contact });
  };

  //Clear current contact
  const clearCurrent = ()=> {
    dispatch({ type:CLEAR_CURRENT });
  };

  //Update contact

  const updateContact  = text => {
    dispatch({ type:UPDATE_CONTACT, payload: text });
  };

  //Filter contacts

  const filterContacts  = contact => {
    dispatch({ type:FILTER_CONTACTS, payload: contact });
  };

  //Clear filter

  const clearFilter = ()=> {
    dispatch({ type:CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current:state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
